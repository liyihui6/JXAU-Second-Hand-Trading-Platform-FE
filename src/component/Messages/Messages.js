import React,{Component} from 'react'
import './index.css'
import Footer from '../Footer/Footer'
import MessageHeader from './MessageHeader/MessageHeader'
import MessageContent from './MessageContent/MessageContent'
import {Input} from "antd";
import login from '../../Storages/SessionStorages/LoginSession'
import {connect} from 'react-redux'
import axios from "../../api/main";

/**
 *
 * 消息首页组件
 *
 * **/
const mapStateToProps = (state) => {
    return {
        userRoomList: state.roomReducer.userRoomList,
        userInfo: state.userInfoReducer.userInfo,
        charInfoTimer: state.timerReducer.ChatInfoTimer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initRoomInfo: (data) => {
            dispatch({
                type: 'INITROOMINFO',
                payload:data
            });
        },
        updateChatInfoTimer: (data) => {
            dispatch({
                type:'UPDATECHATINFO',
                payload:data
            })
        }
    };
}


class Messages extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        if (!login.isLogin()){
            this.props.history.push('/login')
            return
        }
        if (!this.props.charInfoTimer){
            let jishiqi = setInterval(()=>{
                let info = this.props.userInfo
                let userId = info.userId
                axios.get('/api/room/'+userId).then((res)=>{
                    let roomData = res.data
                    if (roomData.code === 1) {
                        console.log('更新数据成功')
                        let rooms = roomData.rooms
                        this.props.initRoomInfo(rooms)
                    }else {

                    }
                }).catch((res)=> {
                    // message.error('服务器错误2')
                })
            },1000)
            console.log("启动计时器")
            this.props.updateChatInfoTimer(jishiqi)
        }
    }
    componentDidMount() {
        document.getElementById('message-container-wrapper').scrollIntoView(false);//为ture返回顶部，false为底部
    }
    componentWillUnmount() {
        // clearInterval(jishiqi)
    }

    render() {
        return (
            <div className={'messages'}>
                <div className={'message-header'}>
                    <MessageHeader/>
                    <div className={'message-search'}>
                        <Input placeholder={'搜索'}/>
                    </div>
                </div>
                <div className={'message-container-wrapper'} id={'message-container-wrapper'}>
                    <div style={{width: '100%', height: '84px'}}/>
                    <div className={'messages-wrapper'}>
                        <ul className={'messages-contents'}>
                            {
                                this.props.userRoomList.length>=1?this.props.userRoomList.map((value,index) => {
                                    let count = 0
                                    value.chats.forEach(item => {
                                        if (item.isRead === 0 && item.from !== this.props.userInfo.userId){
                                            count ++
                                        }
                                    })
                                    return (
                                        <li key={index} className={'message-content'}>
                                            <MessageContent history={this.props.history} data={value} notRead={count}/>
                                        </li>
                                    )
                                }):(
                                    <div className={'forum-content--nodata'}>
                                        <h1>暂无数据哦~</h1>
                                    </div>
                                )
                            }
                            {/*<li className={'message-content'}>*/}
                            {/*<MessageContent history={this.props.history}/>*/}
                            {/*</li>*/}
                            {/*<li className={'message-content'}>*/}
                            {/*<MessageContent history={this.props.history}/>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>
                <div className={'footer'}>
                    <Footer/>
                </div>
            </div>
        );
    }

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Messages)
