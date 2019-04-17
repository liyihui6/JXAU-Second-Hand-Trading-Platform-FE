import React,{Component} from 'react'
import './index.css'
import BoughtDetailCard from './BoughtDetailCard'
import getUserProduct from '../../../api/FetchApi/getUserProduct'
import User from '../../../Storages/LocalStorages/User'
import {Modal,Form,Input,Button,Select,} from 'antd'

const Option = Select.Option;

class BoughtDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            productInfo:[],
            ModalText: 'Content of the modal',
            visible: false,
            confirmLoading: false,
            editId:-1
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
        this.setState({
            visible: true,
            editId:id
        });
    }

    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        console.log(this.state.editId)
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    }

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }

    componentDidMount() {
        setTimeout(()=>{
            let parent = this.refs.par
            let heightArray = []
            let cols = 2
            let childs = parent.childNodes
            for (let i = 0;i < childs.length;i ++){
                console.log(childs[i])
                if (i<cols){
                    heightArray.push(childs[i].offsetHeight)
                }else {
                    let minHeight = Math.min(...heightArray)
                    let index = heightArray.indexOf(minHeight)
                    childs[i].style.position = 'absolute'
                    childs[i].style.top = minHeight+'px'
                    if (i%2===0){
                        childs[i].style.left = '10px'
                        childs[i].style.width = (childs[i].offsetWidth-10)+'px'
                    }else {
                        childs[i].style.right = '10px'
                        childs[i].style.width = (childs[i].offsetWidth-10)+'px'
                    }
                    heightArray[index] += childs[i].offsetHeight
                }
            }
        },50)
    }

    render() {
        return (
            <div className={'bought-detail'}>
                <div className={'bought-detail-header'}>
                    <span className={'bought-detail-header-span'} onClick={this.goBack}> 《 </span>
                    <span className={'bought-detail-header-title'}>我发布的</span>
                </div>
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
                    {/*<div className={'bought-detail-content'}>*/}
                        {/*<div style={{height:'50px',textAlign:'center',background:'gray'}}>hello</div>*/}
                    {/*</div>*/}
                    {/*<div className={'bought-detail-content'}>*/}
                        {/*<div style={{height:'60px',textAlign:'center',background:'gray'}}>hello</div>*/}
                    {/*</div>*/}
                </div>
                <Modal
                    title="Title"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <div>
                        {/*<p>{this.state.ModalText}</p>*/}
                        <Form>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>title</td>
                                        <td><Input placeholder={'请输入'}/></td>
                                    </tr>
                                    <tr>
                                        <td>基本信息</td>
                                        <td><Input placeholder={'请输入'}/></td>
                                    </tr>
                                    <tr>
                                        <td>喜欢的食物</td>
                                        <td>
                                            <Select defaultValue={'noodle'}>
                                                <Option value="noodle">面条</Option>
                                                <Option value="egg">鸡蛋</Option>
                                                <Option value="bread">面包</Option>
                                            </Select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>转手原因</td>
                                        <td><Input placeholder={'请输入'}/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Form>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default BoughtDetail
