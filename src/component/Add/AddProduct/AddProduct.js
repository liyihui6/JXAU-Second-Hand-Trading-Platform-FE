import React,{Component} from 'react'
import {Input,InputNumber,Button,Alert} from 'antd'
import './index.css'
import PicturesWall from '../../PicturesWall/PicturesWall'

const { TextArea } = Input;

class AddProduct extends Component{
    constructor(props) {
        super(props);
        this.state = {
            visible:false
        }
    }

    submit = () => {
        this.handleShow()
    }

    onClose = () => {
        this.props.history.push('/')
    }

    handleClose = () => {
        // this.handleShow()
        this.setState({ visible: false });
        setTimeout(this.onClose,300)
    }

    handleShow = () => {
        this.setState({ visible: true });
    }

    onCancel = ()=>{
        this.props.history.goBack()
    }
    render() {
        return (
            <div className={'add-product'}>
                {this.state.visible ?(<Alert message="Success Tips" type="success" closable showIcon onClose={this.handleClose}/>):null}
                <h2 className={'add-product-title'}>发布</h2>
                <div className={'add-product-input-title'}><Input placeholder={'标题'}/></div>
                <div className={'add-product-input-style'}><span className={'add-product-input-style-1'}>交易方式</span><Input className={'add-product-input-style-2'} placeholder={'交易方式'}/></div>
                <div className={'add-product-input-price'}><span>价格￥</span><InputNumber defaultValue={100}></InputNumber></div>
                <div className={'add-product-input-des'}>
                    <TextArea rows={4} placeholder={'描述宝贝转手的原因，入手渠道和使用感受'}/>
                </div>
                <div className={'add-product-input-pics'}>
                    <PicturesWall></PicturesWall>
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
