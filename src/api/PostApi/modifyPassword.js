import Axios from '../main'

export default function modifyPassword(data){
    return Axios.post('/api/user/password',data)
}

