import React,{Component} from 'react'
import {Link} from 'react-router-dom'
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
        let data = this.props.allData
        console.log(data)
        let style_1 = 'sell-product-wrapper'
        let style_2 = 'sell-product-wrapper clear-margin-right'
        return (
            <div className={'sell'}>
                <div className={'sell-title'}>
                    <h1 className={'sell-detail'}>出售<span className={'sell-more'}><Link to={'/allProduct'}>查看更多 >></Link></span></h1>
                </div>
                <div className={'sell-products'}>
                    <ul style={{overflow: 'hidden',padding:'0'}}>
                        {
                            data.map((value,index) => {
                                return (index>5?null:<li key={index} className={index%2===0?style_1:style_2}>
                                    <Product data={value}></Product>
                                </li>)
                            })
                        }
                        {/*<li className={'sell-product-wrapper'}>*/}
                            {/*<Product></Product>*/}
                        {/*</li>*/}
                        {/*<li className={'sell-product-wrapper clear-margin-right'}>*/}
                            {/*<Product></Product>*/}
                        {/*</li>*/}
                        {/*<li className={'sell-product-wrapper'}>*/}
                            {/*<Product></Product>*/}
                        {/*</li>*/}
                        {/*<li className={'sell-product-wrapper clear-margin-right'}>*/}
                            {/*<Product></Product>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sell
