import React,{Component} from 'react'
import {Input,Button} from 'antd'
import './index.css'
import ret from './ret.svg'

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    back = () =>{
        this.props.history.goBack()
    }

    render() {
        return (
            <div className={'register'}>
                <div className={'register-header'}>
                    <span><img onClick={this.back} src={ret} width={'40px'} height={'40px'} alt=""/></span>
                </div>
                <div className={'register-contents'}>
                    <div className={'register-content x1'}>
                        <Input block size={"large"} placeholder={'邮箱'} allowClear/>
                    </div>
                    <div className={'register-content'}>
                        <Input block size={"large"} placeholder={'用户名'} allowClear/>
                    </div>
                    <div className={'register-content'} >
                        <Input.Password block size={"large"} placeholder={'密码'}/>
                    </div>
                    <div className={'register-content margin_bottom_10px x2'}>
                        <Input block size={"large"} placeholder={'验证码'}/>
                    </div>
                    <div>
                        <Button block size={"large"} ghost >注册</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register
