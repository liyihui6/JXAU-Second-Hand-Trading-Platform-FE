import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import Product from './product/Product'
import getProduct from "../../api/FetchApi/getProduct";

/**
 *
 * 首页商品组件
 *
 * **/

class Sell extends Component{
    constructor(props) {
        super(props);
        this.state = {
            allData:[],
            count:0
        }
    }
    componentWillMount() {
        getProduct(this)
    }

    render() {
        let data = this.state.allData
        let count = 0
        let style_1 = 'sell-product-wrapper'
        let style_2 = 'sell-product-wrapper clear-margin-right'
        return (
            <div className={'sell'}>
                <div className={'sell-title'}>
                    <h1 className={'sell-detail'}>出售<span className={'sell-more'}><Link to={{pathname:'/allProduct',state:{tag:'all'}}}>查看更多 >></Link></span></h1>
                </div>
                <div className={'sell-products'}>
                    <ul style={{overflow: 'hidden',padding:'0'}}>
                        {
                            data.map((value,index) => {
                                let flag = false
                                count ++
                                if (value.publishKinds !== 1 || count > 6){
                                    flag = true
                                    count --
                                }
                                return (flag?null:<li key={index} className={index%2===0?style_1:style_2}>
                                    <Product data={value}/>
                                </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sell
