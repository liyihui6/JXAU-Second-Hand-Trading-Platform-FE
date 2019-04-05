import React,{Component} from 'react'
import './index.css'
import Product from "../Sell/product/Product";
import re from "../UserCenterSetting/return.svg";


class AllProduct extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount(){
        document.getElementById('root').scrollIntoView(true);//为ture返回顶部，false为底部
    }


    back =() => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div className={'all-product'}>
                <div className={'all-product-header'}>
                    <span onClick={this.back} className={'user-center-setting-header-back'}><img src={re} width={'30px'} alt=""/></span>
                    <span>全部商品</span>
                </div>
                <div className={'all-sell-products'}>
                    <ul style={{overflow: 'hidden',padding:'0'}}>
                        <li className={'all-sell-product-wrapper'}>
                            <Product></Product>
                        </li>
                        <li className={'all-sell-product-wrapper clear-margin-right'}>
                            <Product></Product>
                        </li>
                        <li className={'all-sell-product-wrapper'}>
                            <Product></Product>
                        </li>
                        <li className={'all-sell-product-wrapper clear-margin-right'}>
                            <Product></Product>
                        </li>
                        <li className={'all-sell-product-wrapper'}>
                            <Product></Product>
                        </li>
                        <li className={'all-sell-product-wrapper clear-margin-right'}>
                            <Product></Product>
                        </li>
                        <li className={'all-sell-product-wrapper'}>
                            <Product></Product>
                        </li>
                        <li className={'all-sell-product-wrapper clear-margin-right'}>
                            <Product></Product>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default AllProduct
