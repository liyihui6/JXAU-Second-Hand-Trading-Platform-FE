import React,{Component} from 'react'
import './index.css'
import Footer from '../Footer/Footer'
import MessageHeader from './MessageHeader/MessageHeader'
import MessageContent from './MessageContent/MessageContent'
import {Input} from "antd";
import login from '../../Storages/SessionStorages/LoginSession'

/**
 *
 * 消息首页组件
 *
 * **/

class Messages extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        if (!login.isLogin()){
            this.props.history.push('/login')
        }
    }
    componentDidMount() {
        document.getElementById('message-container-wrapper').scrollIntoView(true);//为ture返回顶部，false为底部
    }

    render() {
        return (
            <div className={'messages'}>
                <div className={'message-header'}>
                    <MessageHeader></MessageHeader>
                    <div className={'message-search'}>
                        <Input placeholder={'搜索'}/>
                    </div>
                </div>
                <div className={'message-container-wrapper'} id={'message-container-wrapper'}>
                    <div className={'messages-wrapper'}>
                        <ul className={'messages-contents'}>
                            <li className={'message-content'}>
                                <MessageContent history={this.props.history}></MessageContent>
                            </li>
                            <li className={'message-content'}>
                                <MessageContent history={this.props.history}></MessageContent>
                            </li>
                            <li className={'message-content'}>
                                <MessageContent history={this.props.history}></MessageContent>
                            </li>
                            <li className={'message-content'}>
                                <MessageContent history={this.props.history}></MessageContent>
                            </li>
                            <li className={'message-content'}>
                                <MessageContent history={this.props.history}></MessageContent>
                            </li>
                            <li className={'message-content'}>
                                <MessageContent history={this.props.history}></MessageContent>
                            </li>
                            <li className={'message-content'}>
                                <MessageContent history={this.props.history}></MessageContent>
                            </li>
                            <li className={'message-content'}>
                                <MessageContent history={this.props.history}></MessageContent>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={'footer'}>
                    <Footer></Footer>
                </div>
            </div>
        );
    }

}
export default Messages
