import React,{Component} from 'react'
import './index.css'
import pro from './img2.png'
import avatar from "./123.jpg"
import {Link} from 'react-router-dom'

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={'sell-product'}>
                <Link to={{pathname:'/commodityDetails',state:{email:this.props.data.user.userEmail,publishId:this.props.data.publishId}}}>
                    <div className={'sell--product-detail'}>
                        <img src={pro} alt="" width={'100%'}/>
                        <h2 className={'sell-product-title'}>
                            {this.props.data.publishTitle}
                        </h2>
                        <span className={'sell-price'}>￥{this.props.data.publishPrice}</span>
                    </div>
                    <div className={'sell-user-info'}>
                        <img className={'sell-user-avatar'} src={avatar} alt=""/>
                        <span className={'sell-user-name'}>{this.props.data.user.userNike}</span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Product
