import axios from '../main'
import token from "../../Storages/LocalStorages/Token";
import user from "../../Storages/LocalStorages/User";
import {message} from "antd";

let login = (data,history) => {
    axios.post('api/login',data,{}).then((response)=>{
        let info = response.data
        // console.log(response)
        if (info.code === 1){
            message.success('登录成功')
            token.setToken(info.token)
            user.setUser(info.user)
            axios.defaults.headers['token'] = info.token
            history.push('/userCenter')
        }else {
            message.error(info.message)
        }
    }).catch((response)=>{
        console.log('no')
    })
}

export default login
