import React,{Component} from 'react'
import './index.css'
import BoughtDetailCard from './BoughtDetailCard'
import getUserProduct from '../../../api/FetchApi/getUserProduct'
import User from '../../../Storages/LocalStorages/User'
import {Modal, Input, Select, InputNumber, message,Spin,Icon} from 'antd'
import Waterfall from '../../../utils/Waterfall'
import PicturesWall from "../../PicturesWall/PicturesWall";
import {connect} from 'react-redux'
import ret from './return.svg'

const Option = Select.Option;
const TextArea = Input.TextArea

const mapStateToProps = (state) => {
    return {
        userInfo:state.userInfoReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initUserInfo: (data)=> {
            console.log(data)
            dispatch({
                type:'UPDATEUSERINFO',
                payload:data
            })
        }
    }
}

class BoughtDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            productInfo:[],
            ModalText: 'Content of the modal',
            loading:true,
            visible: false,
            confirmLoading: false,
            editId:-1,
            title:'',
            style:'',
            price:-1,
            reason:'',
            pics:[],
            tag:'else'
        }
    }

    componentWillMount() {
        let userId = User.getUser().userId
        getUserProduct(this,userId)
    }

    goBack = () => {
        this.props.history.goBack()
    }

    deleteBoughtProduct = (id) => {
        this.setState({
            productInfo:this.state.productInfo.filter((item,index)=>{
                if (item.publishId === id){
                    return false
                } else {
                    return true
                }
            })
        })
    }

    showModal = (id) => {
        let info = {}
        info = this.state.productInfo.find((item) => {
            return item.publishId === id
        })
        this.setState({
            visible: true,
            editId:id,
            title:info.publishTitle,
            style:info.publishStyle,
            price:info.publishPrice,
            tag:info.tag,
            reason:info.publishContent,
            pics:info.commodityPhotos
        });
    }

    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.submit()
        }, 500);
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }

    componentDidMount() {
        Waterfall(this.refs.par)
        setTimeout(()=>{
            this.setState({
                loading:false
            })
        },1000)
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
                fkUserId:User.getUser()['userId'],
                pics:this.state.pics,
                tag:this.state.tag
            }
            let photos = []
            let newProductList = this.state.productInfo.filter((value,index)=>{
                return value.publishId !== this.state.editId
            })
            data.pics.forEach((value)=>{
                photos.push({
                    articlePhotoPath:value
                })
            })
            data.commodityPhotos = photos
            newProductList.push(data)
            this.setState({
                productInfo:newProductList,
                visible: false,
                confirmLoading: false
            })
            this.refs.picWall.clearList()
        }
    }

    render() {
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
        return (
            <div className={'bought-detail'}>
                <div className={'bought-detail-header'}>
                    <span className={'bought-detail-header-span'} onClick={this.goBack}> <img style={{width:"30px",paddingLeft:"10px"}} src={ret} alt=""/> </span>
                    <span className={'bought-detail-header-title'}>我发布的</span>
                </div>
                <Spin indicator={antIcon} tip="Loading..." spinning={this.state.loading} size="large">
                    <div className={'bought-detail-content-wrapper'} ref={'par'}>
                        {
                            this.state.productInfo.length>=1?this.state.productInfo.map((value,index)=>{
                                return <div key={index} className={'bought-detail-content'}>
                                    <BoughtDetailCard showModal={this.showModal} deleteBoughtProduct={this.deleteBoughtProduct} data={value}/>
                                </div>
                            }):(
                                <div className={'forum-content--nodata'}>
                                    <h1>暂无数据哦~</h1>
                                </div>
                            )
                        }
                    </div>
                </Spin>
                <Modal
                    title="Title"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <div className={'add-product-input-title'}><span className={'add-product-input-style-1'}>标题</span><Input onChange={this.handleTitle} value={this.state.title} placeholder={'标题'}/></div>
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
                        <span>请重新上传图片</span>
                        <PicturesWall ref={'picWall'} fileList={this.state.pics} handlePics={this.handlePics}/>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoughtDetail)
