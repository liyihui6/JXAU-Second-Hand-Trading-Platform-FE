import React,{Component} from 'react'
import {Input, InputNumber, Button,Select,message} from 'antd'
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
            price:-1,
            reason:'',
            pics:[],
            tag:'else'
        }
    }

    componentWillMount() {
        if (!login.isLogin()){
            this.props.history.push('/login')
        }
    }

    submit = () => {
        if (this.state.reason.length<20){
            message.error('请至少输入20个字的描述')
        } else if (this.state.style.length<=0){
            message.error('请输入交易方式')
        } else if (this.state.price === -1) {
            message.error('请输入金额')
        } else if (this.state.pics.length < 1){
            message.error('请至少添加一张图片描述')
        } else if (this.state.title < 2){
            message.error('请至少输入2个字的标题')
        }else {
            let data = {
                publishTitle:this.state.title,
                publishKinds:1,
                publishStyle:this.state.style,
                publishPrice:this.state.price,
                publishContent:this.state.reason,
                fkUserId:user.getUser()['userId'],
                pics:this.state.pics,
                tag:this.state.tag
            }
            addProduct(data,this.props.history)
        }
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

    handleTag = (value) => {
        this.setState({
            tag:value
        })
    }
    render() {
        const { Option } = Select;
        return (
            <div className={'add-product'}>
                <h2 className={'add-product-title'}>发布</h2>
                <div className={'add-product-input-title'}><Input onChange={this.handleTitle} value={this.state.title} placeholder={'标题'}/></div>
                <div className={'add-product-input-style'}><span className={'add-product-input-style-1'}>交易方式</span><Input onChange={this.handleStyle} value={this.state.style} className={'add-product-input-style-2'} placeholder={'交易方式'}/></div>
                <div className={'add-product-input-style'}>
                    <span style={{marginRight:'8px'}}>请选择商品类型</span>
                    <Select defaultValue={'else'} onChange={this.handleTag} placeholder="Please select a country">
                        <Option value="book">书籍</Option>
                        <Option value="clothes">衣物</Option>
                        <Option value="phone">手机平板</Option>
                        <Option value="cook">厨具</Option>
                        <Option value="computer">电脑配件</Option>
                        <Option value="help">帮助</Option>
                        <Option value="house">租房</Option>
                        <Option value="car">车子</Option>
                        <Option value="self">健身</Option>
                        <Option value="else">其他</Option>
                    </Select>
                </div>
                <div className={'add-product-input-price'}><span>价格￥</span><InputNumber onChange={this.handlePrice} value={this.state.price} defaultValue={100}/></div>
                <div className={'add-product-input-des'}>
                    <TextArea rows={4} value={this.state.reason} onChange={this.handleReason} placeholder={'描述宝贝转手的原因，入手渠道和使用感受'}/>
                </div>
                <div className={'add-product-input-pics'}>
                    <PicturesWall handlePics={this.handlePics}/>
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
