import React,{Component} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from '../component/Home/Home'
import Messages from '../component/Messages/Messages'
import UserCenter from "../component/UserCenter/UserCenter";
import Forum from '../component/Forum/Forum'
import RouterAdd from '../Router/RouterAdd'
// import AddPage from '../component/Add/AddPage'
import CommodityDetails from '../component/CommodityDetails/CommodityDetails'
import Login from '../component/Login/Login'
import Register from '../component/Register/Register'
import UserCenterSetting from '../component/UserCenterSetting/UserCenterSetting'
import AllProduct from '../component/AllProduct/AllProduct'
import Conversation from '../component/Conversation/Conversation'
import BoughtDetail from '../component/UserCenter/BoughtDetail/BoughtDetail'
import Chat from '../component/Chat/Chat'

class RootRouter extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <Router>
                <Route exact path='/' component={Home}/>
                <Route exact path='/messages' component={Messages}/>
                <Route exact path='/userCenter' component={UserCenter}/>
                <Route exact path='/forum' component={Forum}/>
                <Route exact path='/commodityDetails' component={CommodityDetails}/>
                <RouterAdd/>
                <Route exact path='/login' component={Login}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/userCenterSetting'} component={UserCenterSetting}/>
                <Route path={'/allProduct'} component={AllProduct}/>
                <Route path={'/conversation'} component={Conversation}/>
                <Route path={'/bought/detail'} component={BoughtDetail}/>
                <Route path={'/chat'} component={Chat}/>
            </Router>
        );
    }
}

export default RootRouter
