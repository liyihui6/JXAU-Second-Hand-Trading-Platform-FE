import Axios from '../main'
import store from '../../Redux/store'

let getProduct = () => {
    Axios.get('/api/getAllCommodity').then((response)=> {
        let data = response.data.list
        if (data&&data.length>=2){
            store.dispatch({
                type:'INITPRODUCTDATA',
                payload:data
            })
        }
    }).catch((response)=>{

    })
}

export default getProduct
