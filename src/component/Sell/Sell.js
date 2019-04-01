import React,{Component} from 'react'
import './index.css'
import Product from './product/Product'

/**
 *
 * 首页商品组件
 *
 * **/

class Sell extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={'sell'}>
                <div className={'sell-title'}>
                    <h1 className={'sell-detail'}>出售<span className={'sell-more'}>查看更多 >></span></h1>
                </div>
                <div className={'sell-products'}>
                    <ul style={{overflow: 'hidden',padding:'0'}}>
                        <li className={'sell-product-wrapper'}>
                            <Product></Product>
                        </li>
                        <li className={'sell-product-wrapper clear-margin-right'}>
                            <Product></Product>
                        </li>
                        <li className={'sell-product-wrapper'}>
                            <Product></Product>
                        </li>
                        <li className={'sell-product-wrapper clear-margin-right'}>
                            <Product></Product>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sell
