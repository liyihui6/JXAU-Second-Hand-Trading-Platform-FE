import axios from './main'
import {message} from "antd";

export default function register(data,history) {
    axios.post('api/user',data).then((response)=>{
        let resInfo = response.data
        if (resInfo.code === 1){
            message.success('注册成功')
            history.push('/login')
        } else {
            message.error(resInfo.message)
        }
    }).catch((response)=>{
        console.log(response)
        console.log('no')
    })
}
