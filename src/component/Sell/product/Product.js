import React,{Component} from 'react'
import './index.css'
import pro from './img2.png'
import avatar from "./123.jpg"

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={'sell-product'}>
                <div className={'sell--product-detail'}>
                    <img src={pro} alt="" width={'100%'}/>
                    <h2 className={'sell-product-title'}>
                        电竞椅
                    </h2>
                    <span className={'sell-price'}>￥200</span>
                </div>
                <div className={'sell-user-info'}>
                    <img className={'sell-user-avatar'} src={avatar} alt=""/>
                    <span className={'sell-user-name'}>李艺晖</span>
                </div>
            </div>
        );
    }
}

export default Product
