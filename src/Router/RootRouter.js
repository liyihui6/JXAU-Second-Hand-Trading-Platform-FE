import React,{Component} from 'react'
import {HashRouter as Router,Route} from 'react-router-dom'
import Home from '../component/Home/Home'
import Messages from '../component/Messages/Messages'
import UserCenter from "../component/UserCenter/UserCenter";
import Forum from '../component/Forum/Forum'
import RouterAdd from '../Router/RouterAdd'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import CommodityDetails from '../component/CommodityDetails/CommodityDetails'
import Login from '../component/Login/Login'
import Register from '../component/Register/Register'
import UserCenterSetting from '../component/UserCenterSetting/UserCenterSetting'
import AllProduct from '../component/AllProduct/AllProduct'
import Conversation from '../component/Conversation/Conversation'
import BoughtDetail from '../component/UserCenter/BoughtDetail/BoughtDetail'
import Chat from '../component/Chat/Chat'
import wrapAnimation from '../utils/wrapAnimation'
import {Provider} from 'react-redux'
import store from '../Redux/store'

const Index = wrapAnimation(
    Home,'zoomIn','fadeOutDownBig'
)
const Index2 = wrapAnimation(
    Forum,'zoomIn','fadeOutDownBig'
)
const Index3 = wrapAnimation(
    Messages,'zoomIn','fadeOutDownBig'
)
const Index4 = wrapAnimation(
    UserCenter,'appAppear','fadeOutDownBig'
)

class RootRouter extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <TransitionGroup>
                <CSSTransition timeout={1000} classNames="fade">
                    <Provider store={store}>
                        <Router>
                            <Route exact path='/' children={props => {
                                return <Index {...props} />
                            }}/>
                            <Route exact path='/messages' children={props => {
                                return <Index3 {...props} />
                            }}/>
                            <Route exact path='/userCenter' children={props => {
                                return <Index4 {...props} />
                            }}/>
                            <Route exact path='/forum' children={props => {
                                return <Index2 {...props} />
                            }}/>
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
                    </Provider>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}

export default RootRouter
