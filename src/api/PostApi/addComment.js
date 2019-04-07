//添加商品API

import Axios from '../main'
import {message} from "antd";


export default function AddComment(data){
    Axios.post('api/addComment',data).then((response) => {
        let resInfo = response.data
        if (resInfo.code === 1){
            message.success('添加评论成功')
        }else {
            message.error(response.data.message)
        }
    }).catch((response)=> {
        message.error('网络错误')
    })
}
