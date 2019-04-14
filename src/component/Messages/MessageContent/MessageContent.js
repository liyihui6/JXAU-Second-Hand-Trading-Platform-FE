import React,{Component} from 'react'
import {message,Badge} from 'antd'
import './index.css'
import formateDate from '../../../utils/formateDate'
import addRoom from "../../../api/PostApi/addRoom";
import User from '../../../Storages/LocalStorages/User'
import {PICTURESERVERIP} from "../../../config";

// const { Meta } = Card;

/**
 *
 * 消息内容组件
 *
 * **/

class MessageContent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            userId:0,
            sellId:0,
        }
    }

    onChange = (checked) => {
        this.setState({ loading: !checked });
    }

    componentWillMount() {
        let datas = this.props.data
        let user1 = datas.user1
        let user2 = datas.user2
        let user = User.getUser()
        if (user.userId !== user1.userId){
            user1  = datas.user2
            user2 = datas.user1
        }
        if (user2){
            this.setState({
                userId:user1.userId,
                sellId:user2.userId
            })
        }
    }

    toDetail = () => {
        try {
            let data = {
                roomName:'room_'+[this.state.userId,this.state.sellId].sort().join('_'),
                fkUser1:this.state.userId,
                fkUser2:this.state.sellId
            }
            // console.log(data)
            addRoom(data,this)
        }catch (e) {
            message.error('请联网哦~')
        }

    }
    render() {
        let newChat = this.props.data.chats[this.props.data.chats.length-1]
        let user1 = this.props.data.user1
        if (this.props.data.user1.userId===User.getUser().userId) {
            user1 = this.props.data.user2
        }
        return (
            <div onClick={this.toDetail} className={'message-content-wrapper'}>

                <div className={'message-content-avatar'}>
                    <img src={user1?PICTURESERVERIP+'/show/'+user1.userPhotoPath:null} alt={'hello'}/>
                </div>
                <div className={'message-content-info'}>
                    <div>
                        <span className={'message-content-info-username'}>{user1?user1.userNike:null}</span>
                        <span className={'message-content-info-time'}>{newChat?formateDate(new Date(newChat.sendTime),'yyyy-MM-dd hh:mm:ss'):null}</span>
                    </div>
                    <div className={'message-content-detail'}>
                        {newChat?newChat.chatContent:null}
                    </div>
                </div>
                <div className={'message-content-Badge'}>
                    <Badge style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} count={this.props.notRead} overflowCount={99}/>
                </div>
            </div>
        );
    }

}
MessageContent.defaultProps = {
    data:{
        chats:[]
    }
}
export default MessageContent
