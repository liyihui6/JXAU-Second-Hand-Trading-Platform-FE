import Axios from 'axios'
import {PICTURESERVERIP} from "../../config";

let getFNotice = (component) => {
    Axios.get(PICTURESERVERIP+'/getnotices').then((response)=> {
        let data = response.data
        component.setState({
            notices:data
        })
    }).catch((response)=>{

    })
}

export default getFNotice
