import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import modifyPassword from '../../../api/PostApi/modifyPassword'
import './index.css'
import {Modal,Input,message} from "antd";

/**
 *
 * 用户中心头部组件
 *
 * **/

class CenterHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            email:'',
            password:'',
        }
    }

    showModal =()=>{
        this.setState({
            visible:true
        })
    }

    hideModal =()=>{
        this.setState({
            visible:false,
            email:'',
            password:'',
        })
    }

    handleEmail = (e) => {
        this.setState({
            email:e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password:e.target.value
        })
    }

    submit = () => {
        let data = {
            email:this.state.email,
            password:this.state.password
        }
        let res = modifyPassword(data)
        res.then((response)=>{
            if (response.data.code === 1){
                this.setState({
                    visible:false,
                    email:'',
                    password:'',
                })
                message.success("修改密码成功,请重新登录")
                this.props.loginOut()
            } else {
                message.error("修改密码失败")
            }
        }).catch((response)=>{
            message.error("修改密码失败")
        })

    }

    render() {
        return (
            <div className={'center-header'}>
                <Modal
                    title="我的"
                    visible={this.state.visible}
                    onOk={this.submit}
                    onCancel={this.hideModal}
                    okText="确认修改"
                    cancelText="取消"
                 >
                    <h2 style={{textAlign:"center",color:"#1890ff",fontWeight:"700"}}>忘记密码</h2>
                    <h4>填写您的Email</h4>
                    <Input type={"email"} value={this.state.email} onChange={this.handleEmail} placeholder={"type the email"}/>
                    <h4  style={{marginTop:"7px"}}>填写您的新密码</h4>
                    <Input type={"password"} value={this.state.password} onChange={this.handlePassword} placeholder={"type the password"}/>
                </Modal>
                <div className={'center-user-info'}>
                    <span onClick={this.showModal}>我的</span>
                    <Link to={'/userCenterSetting'}><span className={'center-setting'}>设置</span></Link>
                </div>
            </div>
        );
    }
}

export default CenterHeader
