import React,{Component} from 'react'
import './index.css'
import {Card,Button,Skeleton,Avatar, } from 'antd'
import pr from './pr.jpg'
import add from './add.svg'
import ret from './return.svg'

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
        }
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
                    <span className={'commodity-details-header-title'}>￥100</span>
                    <span className={'commodity-details-header-title'}><img src={add} width={'30px'} alt=""/> </span>
                </div>
                <div className={'commodity-details-content-wrapper'}>
                    <Skeleton loading={this.state.loading} avatar active>
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Skeleton>
                    <div className={'commodity-details-content'}>
                        <h3>￥500</h3>
                        <p>【视频看货 女款可选】尼尚(Nesun)手表 男士全自动机械表 三眼多功能夜光防水手表 男士-棕面皮带款</p>
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
