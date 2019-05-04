import React,{Component} from 'react'
import './index.css'
import {Card,Button,Skeleton,Avatar,Modal,message} from 'antd'
import add from './add.svg'
import ret from './return.svg'
import getProductDetail from '../../api/FetchApi/getProductDetail'
import getUserInfo from '../../api/FetchApi/getUserInfo'
import User from '../../Storages/LocalStorages/User'
import addRoom from '../../api/PostApi/addRoom'
import {PICTURESERVERIP} from "../../config";

/***
 *
 * 商品详情页面
 *
 * **/

class CommodityDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            visible:false,
            productData:{},
            sellerInfo:{},
            sellId:0,
            userId:0,
            sellNike:'',
            userNike:''
        }
    }

    componentWillMount(){
        document.getElementById('root').scrollIntoView(true);//为ture返回顶部，false为底部
        getProductDetail(this,this.props.location.state.publishId)
        getUserInfo(this,this.props.location.state.email)
    }

    onCancel = () =>{
        this.props.history.goBack()
    }

    showModal = () => {
        let userInfo = User.getUser()
        let sellInfo = this.state.sellerInfo
        if (userInfo.userId !== sellInfo.userId){
            if (sellInfo){
                let userId = userInfo.userId
                let sellId = sellInfo.userId
                this.setState({
                    sellId:userId,
                    userId:sellId,
                    sellNike:sellInfo.userNike,
                    userNike:userInfo.userNike
                })
            }
            this.setState({
                visible: true,
            });
        }else {
            message.info('这是您自己的商品哦~')
        }
    }

    handleOk = (e) => {
        let data = {
            roomName:'room_'+[this.state.sellId,this.state.userId].sort().join('_'),
            fkUser1:this.state.sellId,
            fkUser2:this.state.userId
        }
        addRoom(data,this)
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }
    render() {
        const { Meta } = Card;
        return (
            <div className={'commodity-details'}>
                <Modal
                    title="发起聊天"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>确认发起联系?</p>
                </Modal>
                <div className={'commodity-details-header'}>
                    <span className={'commodity-details-header-title'} onClick={this.onCancel}> <img src={ret} width={'30px'} alt=""/> </span>
                    <span className={'commodity-details-header-title'}>￥{this.state.productData.publishPrice}</span>
                    <span className={'commodity-details-header-title'}><img src={add} width={'30px'} alt=""/> </span>
                </div>
                <div className={'commodity-details-content-wrapper'}>
                    <div style={{width:'100%',height:'50px'}}>

                    </div>
                    <Skeleton loading={this.state.loading} avatar active>
                        <Meta
                            avatar={<Avatar icon="user" src={this.state.sellerInfo.userPhotoPath?PICTURESERVERIP+'/show/'+this.state.sellerInfo.userPhotoPath:null} />}
                            title={this.state.sellerInfo.userNike}
                            description={this.state.sellerInfo.userDes}
                        />
                    </Skeleton>
                    <div className={'commodity-details-content'}>
                        <h3>￥{this.state.productData.publishPrice}</h3>
                        <p>{this.state.productData.publishContent}</p>
                        <div className={'commodity-details-content-images'}>
                            {
                                this.state.productData.commodityPhotos?this.state.productData.commodityPhotos.map((value,index)=>{
                                    return <div key={index} className={'commodity-details-content-image'}>
                                        <img src={PICTURESERVERIP+'/show/'+value.articlePhotoPath} alt=""/>
                                    </div>
                                }):null
                            }
                        </div>
                    </div>
                    <div className={'commodity-details-content-info'}>
                        <span >担保交易</span>
                        <span className={'commodity-details-content-info-see'}>浏览10次</span>
                    </div>
                </div>
                <div className={'commodity-details-footer'}>
                    <div className={'commodity-details-footer-infos'}>
                        <span className={'commodity-details-footer-info'}>超赞</span>
                        <span className={'commodity-details-footer-info'}>留言</span>
                        <span className={'commodity-details-footer-info'}>收藏</span>
                    </div>
                    <div className={'commodity-details-footer-lianxi'}>
                        <Button onClick={this.showModal} type={"primary"}>马上联系</Button>
                    </div>
                </div>
            </div>
        );
    }

}

export default CommodityDetails
