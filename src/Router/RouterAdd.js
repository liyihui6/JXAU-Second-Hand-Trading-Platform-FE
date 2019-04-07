import React,{Component} from 'react'
import AddFinding from "../component/Add/AddFinding/AddFinding";
import AddElse from "../component/Add/AddElse/AddElse";
import AddNote from "../component/Add/AddNote/AddNote";
import AddProduct from "../component/Add/AddProduct/AddProduct";
import {Route} from "react-router";


class RouterAdd extends Component{
    render() {
        return (
            <div>
                <Route exact path='/add/finding' component={AddFinding}/>
                <Route exact path='/add/else' component={AddElse}/>
                <Route exact path='/add/note' component={AddNote}/>
                <Route exact path='/add/product' component={AddProduct}/>
            </div>
        );
    }
}
export default RouterAdd
