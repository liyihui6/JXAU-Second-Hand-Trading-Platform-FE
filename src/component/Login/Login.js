import React,{Component} from 'react'
import {Input,Button,Divider,message,Modal} from 'antd'
import {Link} from 'react-router-dom'
import './index.css'
import ava from './123.png'
import ret from './ret.svg'
import login from '../../Storages/SessionStorages/LoginSession'
import LoginApi from '../../api/PostApi/Login'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initUserInfo: (data)=> {
            console.log(data)
            dispatch({
                type:'INITUSERINFO',
                payload:data
            })
        }
    }
}


class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            pwd:'',
            visible: false,
        }
    }

    handlePwd = (e) => {
        this.setState({
            pwd:e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email:e.target.value
        })
    }

    submit = () => {
        if (this.state.email.length<5||this.state.pwd<6){
            message.errno('请检查账号密码是否输入正确')
        }else {
            let data = {
                userEmail:this.state.email,
                password:this.state.pwd
            }
            login.login(data)
            LoginApi(data,this)
        }
    }

    back = () =>{
        this.props.history.goBack()
    }
    showForget = () => {
        this.setState({
            visible:true
        })
    }
    hideModal = () =>{
        this.setState({
            visible:false
        })
    }

    render() {
        return (
            <div className={'login'}>
                <Modal
                    title="修改密码"
                    visible={this.state.visible}
                    onOk={this.hideModal}
                    onCancel={this.hideModal}
                    okText="OK"
                    cancelText="取消"
                >
                    <p>
                        请发送邮件到3187858832@qq.com申请修改密码！
                    </p>
                </Modal>
                <div className={'login-header'}>
                    <span><img onClick={this.back} src={ret} width={'40px'} height={'40px'} alt=""/></span>
                </div>
                <div className={'login-wrapper'}>
                    <div className={'login-logo'}>
                        <span className={'login-logo-img'}><img src={ava} alt=""/></span>
                    </div>
                    <div className={'login-input'}>
                        <div className={'login-input-email'}>
                            <Input onChange={this.handleEmail} value={this.state.email} size={'large'} placeholder={'手机号/邮箱'}/>
                        </div>
                        <div className={'login-input-password'}>
                            <Input type={"password"} onPressEnter={this.submit} onChange={this.handlePwd} value={this.state.pwd} size={'large'} placeholder={'密码'}/>
                        </div>
                    </div>
                    <div className={'login-submit'}>
                        <Button block size={'large'} onClick={this.submit} ghost>登录</Button>
                    </div>
                    <div className={'login-else-info'}>
                        <span onClick={this.showForget} className={'login-forget-password'}>忘记密码?</span>
                        <Link to={'/register'}>
                            <span className={'login-register'}>注册账号</span>
                        </Link>
                    </div>
                    <div className={'login-footer'}>
                        <Divider><span style={{fontSize:'12px'}}>其他账号登录</span></Divider>
                        <div className={'login-else-options'}>
                            <div className={'login-else-option'}>微博</div>
                            <div className={'login-else-option'}>微信</div>
                            <div className={'login-else-option'}>Github</div>
                        </div>
                        <div className={'login-footer-version-info'}>
                            <span>掘金 juejin.im</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
