import axios from './main'
import token from "../Storages/LocalStorages/Token";

let login = (data) => {
    let info = {
        userEmail:'1144569608@qq.com',
        password:'aaaaaa'
    }
    axios.post('api/login',info,{}).then((response)=>{
        token.setToken(response.data.token)
    }).catch((response)=>{
        console.log('no')
    })
}

export default login
