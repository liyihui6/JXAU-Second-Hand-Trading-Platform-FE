import Axios from '../main'

let getProductDetail = (component,id) => {
    Axios.get('/api//getCommodityById/'+id).then((response)=> {
        let data = response.data
        // console.log(data)
        if (data){
            component.setState({
                productData:data
            })
        }
    }).catch((response)=>{

    })
}

export default getProductDetail
