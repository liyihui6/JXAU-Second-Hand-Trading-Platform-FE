import React,{Component} from 'react'
import './index.css'
import avatar from './123.jpg'

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
                        <h1 className={'detail-user-name'}>无所谓长久</h1>
                        <div className={'detail-info'}>
                            <div>在闲鱼上共发布失物<span>12</span>件</div>
                            <div>在闲鱼上共卖出<span>12</span>件商品</div>
                        </div>
                    </div>
                    <div className={'detail-user-avatar'}>
                        <img src={avatar} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CenterDetail
