import React,{Component} from 'react'
import './index.css'
import {Card,Button,Skeleton,Avatar, } from 'antd'
import pr from './pr.jpg'
import add from './add.svg'
import ret from './return.svg'
import getProductDetail from '../../api/FetchApi/getProductDetail'
import getUserInfo from '../../api/FetchApi/getUserInfo'

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
            productData:{},
            sellerInfo:{}
        }
    }

    componentWillMount(){
        document.getElementById('root').scrollIntoView(true);//为ture返回顶部，false为底部
        // console.log(this.props.location.state)
        getProductDetail(this,this.props.location.state.publishId)
        getUserInfo(this,this.props.location.state.email)
    }

    onCancel = () =>{
        this.props.history.goBack()
    }
    render() {
        const { Meta } = Card;
        return (
            <div className={'commodity-details'}>
                <div className={'commodity-details-header'}>
                    <span className={'commodity-details-header-title'} onClick={this.onCancel}> <img src={ret} width={'30px'} alt=""/> </span>
                    <span className={'commodity-details-header-title'}>￥{this.state.productData.publishPrice}</span>
                    <span className={'commodity-details-header-title'}><img src={add} width={'30px'} alt=""/> </span>
                </div>
                <div className={'commodity-details-content-wrapper'}>
                    <Skeleton loading={this.state.loading} avatar active>
                        <Meta
                            avatar={<Avatar icon="user" src={this.state.sellerInfo.userPhotoPath?'http://127.0.0.1:5000/show/'+this.state.sellerInfo.userPhotoPath:null} />}
                            title={this.state.sellerInfo.userNike}
                            description={this.state.sellerInfo.userDes}
                        />
                    </Skeleton>
                    <div className={'commodity-details-content'}>
                        <h3>￥{this.state.productData.publishPrice}</h3>
                        <p>{this.state.productData.publishContent}</p>
                        <div className={'commodity-details-content-images'}>
                            <div className={'commodity-details-content-image'}>
                                <img src={pr} alt=""/>
                            </div>
                            <div className={'commodity-details-content-image'}>
                                <img src={pr} alt=""/>
                            </div>
                            <div className={'commodity-details-content-image'}>
                                <img src={pr} alt=""/>
                            </div>
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
                        <Button type={"primary"}>马上联系</Button>
                    </div>
                </div>
            </div>
        );
    }

}

export default CommodityDetails
