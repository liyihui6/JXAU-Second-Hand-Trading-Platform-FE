import axios from '../main'
import token from '../../Storages/LocalStorages/Token'
import {message} from "antd";

let userSetting = (value,history) => {
    // let pic = value['pic']
    // console.log(pic)
    // let form = new FormData().append('file',pic)
    console.log(token.getToken())
    axios.post('/api/updateUserInfoToUserNikeAndPhone',value,{headers:{'token':token.getToken()}}).then((response)=> {
        let resInfo = response.data
        if(resInfo && resInfo['picMessage']){
            message.success('修改成功')
            history.push('/userCenter')
        }else {
            message.error('修改失败')
        }

    }).catch((response)=> {
        message.error('网络错误')
    })
}

export default userSetting
