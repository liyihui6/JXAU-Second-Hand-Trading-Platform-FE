import axios from './main'
import token from "../Storages/LocalStorages/Token";
import {message} from "antd";

let login = (data,history) => {
    axios.post('api/login',data,{}).then((response)=>{
        let info = response.data
        token.setToken(info.token)
        if (info.code === 1){
            message.success('登录成功')
            history.push('/userCenter')
        }else {
            message.error(info.message)
        }
    }).catch((response)=>{
        console.log('no')
    })
}

export default login
