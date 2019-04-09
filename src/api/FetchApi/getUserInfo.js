import Axios from '../main'

let getUserInfo = (component,email) => {
    Axios.get('/api/user/'+email).then((response)=> {
        let data = response.data.user
        if (data){
            // console.log(data)
            component.setState({
                sellerInfo:data
            })
        }
    }).catch((response)=>{

    })
}

export let getUserInfoById = (id) => {
    Axios.get('/api/userById/'+id).then((response)=> {
        let data = response.data
        console.log(data)
        if (data){

        }
    }).catch((response)=>{

    })
}

export default getUserInfo
