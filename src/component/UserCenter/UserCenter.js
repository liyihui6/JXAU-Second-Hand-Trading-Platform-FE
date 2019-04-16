import React,{Component} from 'react'
import './index.css'
import {Button,message} from 'antd'
import CenterHeader from './CenterHeader/CenterHeader'
import CenterDetail from './CenterDetail/CenterDetail'
import Bought from './Bought/Bought'
import Sold from './Sold/Sold'
import Footer from '../Footer/Footer'
import login from '../../Storages/SessionStorages/LoginSession'
import token from '../../Storages/LocalStorages/Token'
import getUserInfo from '../../api/FetchApi/getUserInfo'
import getUserProduct from '../../api/FetchApi/getUserProduct'
import User from '../../Storages/LocalStorages/User'
import {connect} from 'react-redux'
import axios from '../../api/main'
import getProduct from "../../api/FetchApi/getProduct";
// import roomReducer from "../../Redux/roomReducer";

/**
 *
 * 用户中心组件
 *
 * **/

const mapStateToProps = (state) => {
    return {
        userRoomList: state.roomReducer.userRoomList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initRoomInfo: (data) => {
            dispatch({
                type: 'INITROOMINFO',
                payload:data
            });
        },
        initProductInfo: (data) => {
            dispatch({
                type: 'INITPRODUCTDATA',
                payload:data
            });
        },
    };
}

class UserCenter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sellerInfo:{},
            productInfo:[]
        }
    }

    componentWillMount() {
        if (!login.isLogin()){
            message.error('清先登录！')
            this.props.history.push('/login')
        }else {
            getUserInfo(this,User.getUser().userEmail)
            getUserProduct(this,User.getUser().userId)
        }
    }

    componentDidMount() {
        let func = async ()=>{
            let info = User.getUser()
            let userId = info.userId
            axios.get('/api/room/'+userId).then((res)=>{
                let roomData = res.data
                if (roomData.code === 1) {
                    let rooms = roomData.rooms
                    this.props.initRoomInfo(rooms)
                }else {

                }
            }).catch((res)=> {
                message.error('服务器错误2')
            })
            getProduct()
        }
        func().then(()=>{
            setInterval(()=>{
                getProduct()
            },5000)
        })
    }

    loginOut = () => {
        login.loginOut()
        token.clearToken()
        message.success('退出登录成功')
        this.props.history.push('/')
    }

    render() {
        let length = this.state.productInfo.length
        return (
            <div className={'homepage'}>
                <div className={'center-header-wrapper'}>
                    <CenterHeader/>
                </div>
                <div className={'center-container-wrapper'}>
                    <CenterDetail userInfo={this.state.sellerInfo}/>
                    <div className={'none'}/>
                    <div className={'center-container-wrapper-lists'}>
                        <div className={'center-container-wrapper-list'}>
                            <Bought length={length}/>
                        </div>
                        <div className={'center-container-wrapper-list'}>
                            <Sold length={length}/>
                        </div>
                    </div>
                    <div className={'center-container-wrapper-ret'}>
                        <Button block onClick={this.loginOut}>退出登陆</Button>
                    </div>

                </div>
                <div className={'footer'}>
                    <Footer/>
                </div>
            </div>
        );
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserCenter)
