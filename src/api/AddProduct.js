//添加商品API

import Axios from './main'
import {message} from "antd";


export default function AddProduct(data,history){
    Axios.post('',data).then((response) => {
        let resInfo = response.data
        if (resInfo.code === 1){
            message.success('添加成功')
            history.push('/')
        }else {
            message.error(response.data.message)
        }
    }).catch((response)=> {
        message.error('网络错误')
    })
}
