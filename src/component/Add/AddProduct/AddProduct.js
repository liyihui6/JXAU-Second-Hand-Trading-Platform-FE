import React,{Component} from 'react'
import {Input, InputNumber, Button} from 'antd'
import './index.css'
import PicturesWall from '../../PicturesWall/PicturesWall'
import login from "../../../Storages/SessionStorages/LoginSession";
import user from "../../../Storages/LocalStorages/User";
import addProduct from '../../../api/PostApi/addProduct'

const { TextArea } = Input;

class AddProduct extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            style:'',
            price:'',
            reason:'',
            pics:[]
        }
    }

    componentWillMount() {
        if (!login.isLogin()){
            this.props.history.push('/login')
        }
    }

    submit = () => {
        let data = {
            publishTitle:this.state.title,
            publishKinds:1,
            publishStyle:this.state.style,
            publishPrice:this.state.price,
            publishContent:this.state.reason,
            fkUserId:user.getUser()['userId'],
            pics:this.state.pics
        }
        // let JsonData = JSON.stringify(data)
        addProduct(data,this.props.history)
    }


    onCancel = ()=>{
        this.props.history.goBack()
    }

    handleTitle = (e) => {
        this.setState({
            title:e.target.value
        })
    }

    handleStyle = (e) => {
        this.setState({
            style:e.target.value
        })
    }

    handlePrice = (value) => {
        this.setState({
            price:value
        })
    }

    handleReason = (e) => {
        this.setState({
            reason:e.target.value
        })
    }
    handlePics = (fileList) => {
        this.setState({
            pics:fileList
        })
    }

    render() {
        return (
            <div className={'add-product'}>
                <h2 className={'add-product-title'}>发布</h2>
                <div className={'add-product-input-title'}><Input onChange={this.handleTitle} value={this.state.title} placeholder={'标题'}/></div>
                <div className={'add-product-input-style'}><span className={'add-product-input-style-1'}>交易方式</span><Input onChange={this.handleStyle} value={this.state.style} className={'add-product-input-style-2'} placeholder={'交易方式'}/></div>
                <div className={'add-product-input-price'}><span>价格￥</span><InputNumber onChange={this.handlePrice} value={this.state.price} defaultValue={100}></InputNumber></div>
                <div className={'add-product-input-des'}>
                    <TextArea rows={4} value={this.state.reason} onChange={this.handleReason} placeholder={'描述宝贝转手的原因，入手渠道和使用感受'}/>
                </div>
                <div className={'add-product-input-pics'}>
                    <PicturesWall handlePics={this.handlePics}></PicturesWall>
                </div>
                <div className={'add-product-input-submit'}>
                    <Button type={"primary"} className={'add-product-input-submit-ok'} onClick={this.submit}>确认发布</Button>
                    <Button type={"primary"} className={'add-product-input-submit-cancel'} onClick={this.onCancel}>取消</Button>
                </div>
            </div>
        );
    }

}

export default AddProduct
