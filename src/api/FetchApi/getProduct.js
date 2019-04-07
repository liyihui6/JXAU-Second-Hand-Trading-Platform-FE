import Axios from '../main'

let getProduct = (component) => {
    Axios.get('/api/getAllCommodity').then((response)=> {
        let data = response.data.list
        if (data){
            component.setState({
                allData:data
            })
        }
    }).catch((response)=>{

    })
}

export default getProduct
