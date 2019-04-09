// deleteProduct
import Axios from '../main'
import {message} from "antd";

let getUserProduct = (id) => {
    Axios.get('/api/deleteCommodityByCommodityId/'+id).then((response)=> {
        // console.log(response)
        message.success('删除成功')
    }).catch((response)=>{
        message.error('删除失败')
    })
}

export default getUserProduct
