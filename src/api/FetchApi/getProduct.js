import Axios from '../main'

let getProduct = (component) => {
    Axios.get('/api/getAllCommodity').then((response)=> {
        let data = response.data.list
        if (data){
            // console.log(data)
            component.setState({
                allData:data
            })
        }
    }).catch((response)=>{

    })
}

export default getProduct
