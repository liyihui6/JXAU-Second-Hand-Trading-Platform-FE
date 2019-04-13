import React,{Component} from 'react'
import './index.css'
import Footer from '../Footer/Footer'
import MessageHeader from './MessageHeader/MessageHeader'
import MessageContent from './MessageContent/MessageContent'
import {Input} from "antd";
import login from '../../Storages/SessionStorages/LoginSession'
import {connect} from 'react-redux'

/**
 *
 * 消息首页组件
 *
 * **/

const mapStateToProps = (state) => {
    return {
        userRoomList: state.userRoomList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
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
        }
    }
    componentDidMount() {
        document.getElementById('message-container-wrapper').scrollIntoView(true);//为ture返回顶部，false为底部
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
                    <div style={{width:'100%',height:'84px'}}>

                    </div>
                    <div className={'messages-wrapper'}>
                        <ul className={'messages-contents'}>
                            {
                                this.props.userRoomList?this.props.userRoomList.map((value,index) => {
                                    return (
                                        <li key={index} className={'message-content'}>
                                            <MessageContent history={this.props.history} data={value}/>
                                        </li>
                                    )
                                }):null
                            }
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
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Messages)
