import User from '../../Storages/LocalStorages/User'
import setChatIsRead from '../../api/PostApi/setChatIsRead'
import {Input, Button, Modal, Avatar, Spin} from 'antd'
import addChat from '../../api/PostApi/addChat'
import React,{Component} from 'react'
import {connect} from 'react-redux'
import 'socket.io-client'
import './index.css'
import back from './back.svg'
import {CHATSERVERIP} from "../../config";
import {PICTURESERVERIP} from "../../config";
import {getUserInfoById} from '../../api/FetchApi/getUserInfo'


const mapStateToProps = (state) => {
    return {
        RoomInfo:state.roomReducer.userRoomList,
        UserInfo:state.userInfoReducer.userInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        InsertChat:(data)=>{
            dispatch({
                type:'',
                payload:data
            })
        }
    }
}

class Chat extends Component{
    constructor(props) {
        super(props);
        this.state = {
            socket:require('socket.io-client')(CHATSERVERIP+'/namespace1'),
            message:'',
            messages:[],
            roomId:0,
            roomName:'default',
            visible: false,
            loading: true,
            from:0,
            to:0,
            friendInfo: {},
        }
    }
     componentWillMount() {
        if (this.props.location.state){
            let from = this.props.location.state.userId
            let to = this.props.location.state.sellId
            if (from === User.getUser().userId){

            } else {
                from = this.props.location.state.sellId
                to = this.props.location.state.userId
            }
            this.setState({
                roomId:this.props.location.state.roomId,
                roomName:this.props.location.state.roomName,
                from:from,
                to:to,
            })
            getUserInfoById(to).then((response)=> {
                let data = response.data
                if (data){
                    this.setState({
                        friendInfo:data
                    })
                }
            }).catch((response)=>{

            })
        }
        let roomName = ''
        try {
            roomName = this.props.location.state.roomName
        }catch (e) {
            roomName = this.state.roomName
        }
         this.state.socket.on('receiveMsg',this.receiveMsg)
         this.state.socket.emit('join',roomName,'hello,我进入了房间')
     }
     componentDidMount() {
        try {
            this.props.RoomInfo.forEach((value,index)=>{
                if (value.roomId === this.props.location.state.roomId){
                    this.setState({
                        messages:value.chats
                    })
                }
            })
            setTimeout(()=>{
                this.setState({
                    loading: false
                })
                document.getElementsByClassName('chat-content-wrapper')[0].scrollIntoView(false);
            },1000)
        }catch (e) {

        }
     }

    handleMsg = (e) => {
        this.setState({
            message:e.target.value
        })
     }
    sendMsg = () => {
        let data = {
            date:new Date().toLocaleString(),
            chatContent:this.state.message,
            from:this.state.from,
            to:this.state.to,
            fkRoomId:this.state.roomId
        }
        console.log(data)
        addChat(data,this)
        this.setState({
            message:''
        })
    }

    receiveMsg = (info) => {
        console.log(info)
        if (info.isRead === 0){
            info.isRead = 1
            setChatIsRead(info.chatId)
        }
        this.setState({
            messages:[...this.state.messages,info]
        })
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleRoom = (e) => {
        this.state.socket.emit('join',e.target.value,'hello,我进入了房间')
        this.setState({
            roomId:e.target.value
        })
    }

    goBack = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <Spin tip="Loading..." className={"loading"} spinning={this.state.loading}>
                <div className={'chat'} id={'chat-el'}>
                    <div className={'chat-header'}>
                        <div className={'conversation-header-wrapper'}>
                            <div onClick={this.goBack} className={'conversation-header-messages'}><img src={back} style={{width:'20px'}} alt=""/></div>
                            <span className={'conversation-header-username'}>消息</span>
                            <div className={'conversation-header-setting'}>
                                123
                            </div>
                        </div>
                    </div>
                    <div style={{width: "100%", height: "42px"}}/>
                    <Modal
                        title="修改房间名称"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <Input value={this.state.roomName} onChange={this.handleRoom} placeholder={'输入房间名'} onPressEnter={this.handleOk}/>
                    </Modal>
                    <div className={'chat-content-wrapper'}>
                        <div className={'conversation-content-wrapper'}>
                            {
                                this.state.messages.map((value,index)=> {
                                    if (value.from === this.state.from) {
                                        return (
                                            <div key={index} className={'conversation-content-self'}>
                                                <div className={'conversation-content-avatar-self'}><Avatar src={PICTURESERVERIP+'/show/'+this.props.UserInfo.userPhotoPath}>U</Avatar></div>
                                                <div className={'conversation-content-detail-self'}><p>{value.chatContent}</p></div>
                                            </div>
                                        )
                                    }else{
                                        value.isRead = 1
                                        setChatIsRead(value.chatId)
                                        return (
                                            <div key={index} className={'conversation-content'}>
                                                <div className={'conversation-content-avatar'}><Avatar src={this.state.friendInfo.userPhotoPath?PICTURESERVERIP+'/show/'+this.state.friendInfo.userPhotoPath:PICTURESERVERIP+'/show/default.jpg'}>U</Avatar></div>
                                                <div className={'conversation-content-detail'}><p>{value.chatContent}</p></div>
                                            </div>
                                        )
                                    }

                                })
                            }
                        </div>
                    </div>
                    <div className={'chat-footer'}>
                        <Input className={'chat-input-message'} placeholder={'type message'} value={this.state.message} onChange={this.handleMsg} onPressEnter={this.sendMsg}/>
                        <Button onClick={this.sendMsg} className={'chat-send-message'} type={"primary"}>发送</Button>
                    </div>
                </div>
            </Spin>
        );
    }

}

Chat.defaultProps = {
    location:{
        state:{
            roomId:0,
            roomName:'default',
            userId:0,
            sellId:0
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat)
