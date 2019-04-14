//添加房间

import Axios from '../main'
import {message} from "antd";


export default function addRoom(data,component){
    if (data.fkUser1 === data.fkUser2 || ''+data.fkUser1.length==='' || ''+data.fkUser2.length===''){

    } else {
        Axios.post('/api/room',data).then((response) => {
            let resInfo = response.data
            let roomId = resInfo.room.roomId
            if (roomId){
                component.props.history.push({pathname:'/chat',state:{roomId:roomId,roomName:resInfo.room.roomName,userId:component.state.userId,sellId:component.state.sellId}})
            }else {
                message.error('网络错误')
            }
        }).catch((response)=> {
            message.error('网络错误')
        })
    }

}
