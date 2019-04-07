//添加商品API

import Axios from '../main'
import {message} from "antd";


export default function AddProduct(data,history){
    Axios.post('/api/addCommodity',data).then((response) => {
        let resInfo = response.data
        console.log(response)
        if (resInfo.code === 1){
            message.success('发布成功')
            setTimeout(()=>{
                history.push('/')
            },500)
        }else {
            message.error(response.data.message)
        }
    }).catch((response)=> {
        message.error('网络错误')
    })
}
