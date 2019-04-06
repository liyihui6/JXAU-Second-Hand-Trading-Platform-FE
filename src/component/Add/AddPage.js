import React,{Component} from 'react'
import RouterAdd from '../../Router/RouterAdd'
import login from "../../Storages/SessionStorages/LoginSession";

class AddPage extends Component{

    render() {

        return (
            <div className={'add'}>
                <RouterAdd></RouterAdd>
            </div>
        );
    }
}

export default AddPage
