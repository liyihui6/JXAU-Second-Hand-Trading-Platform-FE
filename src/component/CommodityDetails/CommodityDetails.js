import React,{Component} from 'react'
import './index.css'

/***
 *
 * 商品详情页面
 *
 * **/

class CommodityDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={'commodity-details'}>
                <div className={'commodity-details-header'}>
                    <span className={'commodity-details-header-title'}> x </span>
                    <span className={'commodity-details-header-title'}>￥100</span>
                    <span className={'commodity-details-header-title'}>...</span>
                </div>
                <div className={'commodity-details-content-wrapper'}>
                    <p>hello world</p>
                </div>
            </div>
        );
    }

}

export default CommodityDetails
