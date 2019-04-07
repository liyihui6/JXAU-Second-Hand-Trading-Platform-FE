import Axios from 'axios'

let getFNotice = (component) => {
    Axios.get('http://localhost:5000/getnotices').then((response)=> {
        let data = response.data
        component.setState({
            notices:data
        })
    }).catch((response)=>{

    })
}

export default getFNotice
