import React,{Component} from 'react'
import './index.css'
import Product from "../Sell/product/Product";
import re from "../UserCenterSetting/return.svg";
import getProduct from "../../api/FetchApi/getProduct";


class AllProduct extends Component{
    constructor(props) {
        super(props);
        this.state = {
            allData:[],
            tag:'all'
        }
    }
    componentWillMount(){
        document.getElementById('root').scrollIntoView(true);//为ture返回顶部，false为底部
        getProduct(this)
        let tag = this.props.location.state.tag
        if (tag){
            this.setState({
                tag:tag
            })
        }
    }

    goBack = () => {
        this.props.history.goBack()
    }
    render() {
        let data = this.state.allData

        let style_1 = 'sell-product-wrapper'
        let style_2 = 'sell-product-wrapper clear-margin-right'
        return (
            <div className={'all-product'}>
                <div className={'all-product-header'}>
                    <span onClick={this.goBack} className={'user-center-setting-header-back'}><img src={re} width={'30px'} alt=""/></span>
                    <span>全部商品</span>
                </div>
                <div className={'all-sell-products'}>
                    <ul style={{overflow: 'hidden',padding:'0'}}>
                        {
                            data.map((value,index) => {
                                let tag = value.tag
                                let flag = false
                                if (!tag){
                                    tag = 'all'
                                }
                                if (this.state.tag === 'all' && value.publishKinds === 1){
                                    flag = true
                                }else if(value.publishKinds === 1 && tag === this.state.tag ){
                                    flag = true
                                }

                                return (flag?<li key={index} className={index%2===0?style_1:style_2}>
                                    <Product data={value}/>
                                </li>:null)
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }

}

export default AllProduct
