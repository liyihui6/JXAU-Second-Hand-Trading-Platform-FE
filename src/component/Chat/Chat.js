import React,{Component} from 'react'
import {Input,Button,Modal} from 'antd'
import 'socket.io-client'
import './index.css'
import addChat from '../../api/PostApi/addChat'
import setChatIsRead from '../../api/PostApi/setChatIsRead'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        data:state
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
            socket:require('socket.io-client')('http://localhost:4000/namespace1'),
            message:'',
            messages:[],
            roomId:0,
            roomName:'default',
            visible: false,
            from:0,
            to:0
        }
    }
     componentWillMount() {
        if (this.props.location.state){
            this.setState({
                roomId:this.props.location.state.roomId,
                roomName:this.props.location.state.roomName,
                from:this.props.location.state.userId,
                to:this.props.location.state.sellId,
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
    render() {
        return (
            <div className={'chat'}>
                <div className={'chat-header'}>
                    <h2>{this.state.roomName}</h2>
                    <Button block type="primary" onClick={this.showModal}>
                        修改房间ID
                    </Button>
                </div>
                <div>
                    <Modal
                        title="修改房间名称"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <Input value={this.state.roomName} onChange={this.handleRoom} placeholder={'输入房间名'} onPressEnter={this.handleOk}/>
                    </Modal>
                </div>
                <div className={'chat-content-wrapper'}>
                    {
                        this.state.messages.map((value,index)=> {
                            return <div key={index} className={'chat-content'}>
                                <p><span style={{marginRight:'5px'}}>{new Date(value.sendTime).toLocaleString()}</span> : {value.chatContent}</p>
                            </div>
                        })
                    }
                </div>
                <div className={'chat-footer'}>
                    <Input className={'chat-input-message'} placeholder={'type message'} value={this.state.message} onChange={this.handleMsg} onPressEnter={this.sendMsg}/>
                    <Button onClick={this.sendMsg} className={'chat-send-message'} type={"primary"}>发送消息</Button>
                </div>
            </div>
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
