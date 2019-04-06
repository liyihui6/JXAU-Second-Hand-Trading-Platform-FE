import axios from './main'

export function register(data) {
    axios.post('api/user').then((response)=>{
        console.log(response)
    }).catch((response)=>{
        console.log(response)
    })
}
