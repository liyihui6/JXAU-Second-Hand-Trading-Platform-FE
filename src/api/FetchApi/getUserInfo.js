import Axios from '../main'

let getUserInfo = (component,email) => {
    Axios.get('/api/user/'+email).then((response)=> {
        let data = response.data.user
        if (data){
            component.setState({
                sellerInfo:data
            })
            component.props.initUserInfo(data)
        }
    }).catch((response)=>{

    })
}

export let getUserInfoById = (id) => {
    return Axios.get('/api/userById/'+id)
}

export default getUserInfo
