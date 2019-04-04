import React,{Component} from 'react'
import {Input,Button,Divider} from 'antd'
import {Link} from 'react-router-dom'
import './index.css'
import ava from './123.jpg'
import ret from './ret.svg'

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    back = () =>{
        this.props.history.goBack()
    }
    render() {
        return (
            <div className={'login'}>
                <div className={'login-header'}>
                    <span><img onClick={this.back} src={ret} width={'40px'} height={'40px'} alt=""/></span>
                </div>
                <div className={'login-wrapper'}>
                    <div className={'login-logo'}>
                        <span className={'login-logo-img'}><img src={ava} alt=""/></span>
                    </div>
                    <div className={'login-input'}>
                        <div className={'login-input-email'}>
                            <Input size={'large'} placeholder={'手机号/邮箱'}/>
                        </div>
                        <div className={'login-input-password'}>
                            <Input size={'large'} placeholder={'密码'}/>
                        </div>
                    </div>
                    <div className={'login-submit'}>
                        <Button block size={'large'} ghost>登录</Button>
                    </div>
                    <div className={'login-else-info'}>
                        <span className={'login-forget-password'}>忘记密码?</span>
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

export default Login
