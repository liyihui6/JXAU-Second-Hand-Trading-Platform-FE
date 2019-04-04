import React,{Component} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from '../component/Home/Home'
import Messages from '../component/Messages/Messages'
import UserCenter from "../component/UserCenter/UserCenter";
import Forum from '../component/Forum/Forum'
import RouterAdd from '../Router/RouterAdd'
import AddPage from '../component/Add/AddPage'
import CommodityDetails from '../component/CommodityDetails/CommodityDetails'
import Login from '../component/Login/Login'
import Register from '../component/Register/Register'
import UserCenterSetting from '../component/UserCenterSetting/UserCenterSetting'
import AllProduct from '../component/AllProduct/AllProduct'


class RootRouter extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <Router>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/messages' component={Messages}></Route>
                <Route exact path='/userCenter' component={UserCenter}></Route>
                <Route exact path='/forum' component={Forum}></Route>
                <Route exact path='/commodityDetails' component={CommodityDetails}></Route>
                <Route exact path='/add' component={AddPage}>
                    <RouterAdd></RouterAdd>
                </Route>
                <Route exact path='/login' component={Login}></Route>
                <Route path={'/register'} component={Register}></Route>
                <Route path={'/userCenterSetting'} component={UserCenterSetting}></Route>
                <Route path={'/allProduct'} component={AllProduct}></Route>
            </Router>
        );
    }
}

export default RootRouter
