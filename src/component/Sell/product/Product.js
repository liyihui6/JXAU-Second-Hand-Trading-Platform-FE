import React,{Component} from 'react'
import './index.css'
import avatar from "./123.jpg"
import {Link} from 'react-router-dom'
import {PICTURESERVERIP} from "../../../config";

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let photos = this.props.data.commodityPhotos
        let user = this.props.data.user
        let userAvatar = PICTURESERVERIP+'/show/default.jpg'
        if (user){
            userAvatar = PICTURESERVERIP+'/show/'+user.userPhotoPath
        }
        let photo = avatar
        if (photos){
            photo = PICTURESERVERIP+'/show/'+photos[0].articlePhotoPath
        }
        return (
            <div className={'sell-product'}>
                <Link to={{pathname:'/commodityDetails',state:{email:this.props.data.user.userEmail,publishId:this.props.data.publishId}}}>
                    <div className={'sell--product-detail'}>
                        <div className={'sell-product-pic'}>
                            <img src={photo} alt=""/>
                        </div>
                        <h2 className={'sell-product-title'}>
                            {this.props.data.publishTitle}
                        </h2>
                        <span className={'sell-price'}>￥{this.props.data.publishPrice}</span>
                    </div>
                    <div className={'sell-user-info'}>
                        <img className={'sell-user-avatar'} src={userAvatar} alt=""/>
                        <span className={'sell-user-name'}>{this.props.data.user.userNike}</span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Product
