//添加聊天记录

import Axios from '../main'
import {message} from "antd";


export default function addChat(data,component){
    Axios.post('/api/chat',data).then((response) => {
        let resInfo = response.data
        if (resInfo){
            // console.log(resInfo)
            component.setState({
                messages:[...component.state.messages,resInfo]
            })
            component.state.socket.emit('sendMsg',resInfo,component.state.roomName)
        }else {
            message.error('网络错误')
        }
    }).catch((response)=> {
        message.error('网络错误')
    })
}
