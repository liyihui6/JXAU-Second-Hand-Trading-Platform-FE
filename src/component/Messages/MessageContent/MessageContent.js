import React,{Component} from 'react'
import './index.css'
import formateDate from '../../../utils/formateDate'
import addRoom from "../../../api/PostApi/addRoom";

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
        }
    }

    onChange = (checked) => {
        this.setState({ loading: !checked });
    }

    toDetail = () => {
        console.log(this.props.data)
        let user1 = this.props.data.user1
        let user2 = this.props.data.user2
        console.log(user1)
        let data = {
            roomName:'room_'+[user1.userId,user2.userId].sort().join('_'),
            fkUser1:user1.userId,
            fkUser2:user2.userId
        }
        addRoom(data,this)
    }
    render() {
        let newChat = this.props.data.chats[this.props.data.chats.length-1]
        let user1 = this.props.data.user1
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
