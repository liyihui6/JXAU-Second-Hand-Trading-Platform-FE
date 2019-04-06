import axios from './main'
import token from '../Storages/LocalStorages/Token'

let userSetting = (value) => {
    let info = {
        name:value['name'],
        phone:value['phone']
    }
    let pic = value['pic']
    console.log(pic)
    let form = new FormData().append('file',pic)
    axios.post('/api/updateUser',form,{headers:{token:token.getToken(),"Content-Type": "multipart/form-data"}}).then((response)=> {
        console.log('yes')
        console.log(response)
    }).catch((response)=> {
        console.log('no')
        console.log(response)
    })
}

export default userSetting
