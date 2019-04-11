//添加房间

import Axios from '../main'
import {message} from "antd";


export default function addRoom(data,component){
    Axios.post('/api/room',data).then((response) => {
        let resInfo = response.data
        let roomId = resInfo.room.roomId
        if (roomId){
            // console.log(roomId)
            component.props.history.push({pathname:'/chat',state:{roomId:roomId,roomName:resInfo.room.roomName,userId:component.state.userId,sellId:component.state.sellId}})
        }else {
            message.error('网络错误')
        }
        console.log(resInfo)
    }).catch((response)=> {
        message.error('网络错误')
    })
}
