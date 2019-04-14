import React,{Component} from 'react'
import {message,Badge} from 'antd'
import './index.css'
import formateDate from '../../../utils/formateDate'
import addRoom from "../../../api/PostApi/addRoom";
import User from '../../../Storages/LocalStorages/User'

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
            sellId:0
        }
    }

    onChange = (checked) => {
        this.setState({ loading: !checked });
    }

    componentWillUnmount() {
        let user1 = this.props.data.user1
        let user2 = this.props.data.user2
        if (this.props.data.user1.userId!==User.getUser().userId) {
            user1 = this.props.data.user2
            user2 = this.props.data.user1
        }
        console.log({
            userId:user1.userId,
            sellId:user2.userId
        })
        this.setState({
            userId:user1.userId,
            sellId:user2.userId
        })
    }

    toDetail = () => {
        try {
            let user1 = this.props.data.user1
            let user2 = this.props.data.user2
            console.log(User.getUser().userId)
            if (this.props.data.user1.userId===User.getUser().userId) {
                user1 = this.props.data.user2
                user2 = this.props.data.user1
            }
            let data = {
                roomName:'room_'+[user1.userId,user2.userId].sort().join('_'),
                fkUser1:user1.userId,
                fkUser2:user2.userId
            }
            console.log(data)
            addRoom(data,this)
        }catch (e) {
            message.error('请联网哦~')
        }

    }
    render() {
        let newChat = this.props.data.chats[this.props.data.chats.length-1]
        let user1 = this.props.data.user1
        // console.log(User.getUser().userId)
        if (this.props.data.user1.userId===User.getUser().userId) {
            user1 = this.props.data.user2
        }
        console.log(user1)
        return (
            <div onClick={this.toDetail} className={'message-content-wrapper'}>

                <div className={'message-content-avatar'}>
                    <img src={user1?'http://127.0.0.1:5000/show/'+user1.userPhotoPath:null} alt={'hello'}/>
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
                <Badge style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} count={1000} overflowCount={99}/>
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
