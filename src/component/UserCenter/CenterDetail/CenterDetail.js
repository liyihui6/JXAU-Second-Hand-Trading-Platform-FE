import React,{Component} from 'react'
import './index.css'
import avatar from './123.jpg'
import {PICTURESERVERIP} from "../../../config";

/**
 *
 * 用户中心详情组件
 *
 * **/

class CenterDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={'center-detail-wrapper'}>
                <div className={'detail-wrapper'}>
                    <div className={'detail-user-info'}>
                        <h1 className={'detail-user-name'}>{this.props.userInfo.userNike}</h1>
                        <div className={'detail-info'}>
                            <div>在闲鱼上共发布失物<span>12</span>件</div>
                            <div>在闲鱼上共卖出<span>12</span>件商品</div>
                        </div>
                    </div>
                    <div className={'detail-user-avatar'}>
                        <img src={this.props.userInfo.userPhotoPath?PICTURESERVERIP+'/show/'+this.props.userInfo.userPhotoPath:avatar} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CenterDetail
