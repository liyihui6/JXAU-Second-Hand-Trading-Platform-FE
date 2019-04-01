import React,{Component} from 'react'
import './index.css'
// import {Input} from 'antd'

/**
 *
 * 消息头部组件
 *
 * **/

class MessageHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={'message-messageHeader'}>
                消息
            </div>
        );
    }

}

export default MessageHeader
