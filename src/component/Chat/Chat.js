import React,{Component} from 'react'
import {Input,Button,Modal} from 'antd'
import 'socket.io-client'
import './index.css'

class Chat extends Component{
    constructor(props) {
        super(props);
        this.state = {
            socket:require('socket.io-client')('http://localhost:4000/namespace1'),
            message:'',
            messages:[],
            roomId:'hello',
            visible: false
        }
    }
     componentWillMount() {
         this.state.socket.on('receiveMsg',this.receiveMsg)
         this.state.socket.emit('join',this.state.roomId,'hello,我进入了房间')
     }

    handleMsg = (e) => {
        this.setState({
            message:e.target.value
        })
     }
    sendMsg = () => {
        let data = {
            date:new Date().toLocaleString(),
            content:this.state.message
        }
        this.setState({
            messages:[...this.state.messages,data]
        })
        // console.log('发送：'+data)
        this.state.socket.emit('sendMsg',data,this.state.roomId)
        this.setState({
            message:''
        })
    }

    receiveMsg = (info) => {
        this.setState({
            messages:[...this.state.messages,info]
        })
        // console.log(info)
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        // console.log(e);
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
                    <h2>{this.state.roomId}</h2>
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
                        <Input value={this.state.roomId} onChange={this.handleRoom} placeholder={'输入房间名'} onPressEnter={this.handleOk}/>
                    </Modal>
                </div>
                <div className={'chat-content-wrapper'}>
                    {
                        this.state.messages.map((value,index)=> {
                            return <div key={index} className={'chat-content'}>
                                <p><span style={{marginRight:'5px'}}>{value.date}</span> : {value.content}</p>
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

export default Chat
