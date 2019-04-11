// http://www.dza.com/api/chat/read/{chatId}

//添加房间

import Axios from '../main'
import {message} from "antd";


export default function addRoom(id){
    Axios.post('/api/chat/read/'+id).then((response) => {
        console.log(response)
    }).catch((response)=> {
        message.error('网络错误')
    })
}
