import Axios from '../main'

let getUserProduct = (component,id) => {
    Axios.get('/api/getCommoditysByUserId/'+id).then((response)=> {
        let data = response.data
        if (data){
            component.setState({
                productInfo:data
            })
        }
    }).catch((response)=>{

    })
}

export default getUserProduct
