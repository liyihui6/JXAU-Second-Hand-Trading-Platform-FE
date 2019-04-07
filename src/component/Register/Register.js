import React,{Component} from 'react'
import {Input,Button} from 'antd'
import './index.css'
import ret from './ret.svg'
import register from '../../api/PostApi/Register'

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            name:'',
            password:'',
            phone:''
        }
    }

    back = () =>{
        this.props.history.goBack()
    }

    handleEmail = (e) => {
        this.setState({
            email:e.target.value
        })
    }

    handleName = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password:e.target.value
        })
    }

    handlePhone = (e) => {
        this.setState({
            phone:e.target.value
        })
    }

    submit = () => {
        let data = {
            userEmail:this.state.email,
            userNike:this.state.name,
            userPassword:this.state.password,
            userPhone:this.state.phone
        }
        register(data,this.props.history)
    }




    render() {
        return (
            <div className={'register'}>
                <div className={'register-header'}>
                    <span><img onClick={this.back} src={ret} width={'40px'} height={'40px'} alt=""/></span>
                </div>
                <div className={'register-contents'}>
                    <div className={'register-content x1'}>
                        <Input size={"large"} value={this.state.email} onChange={this.handleEmail} placeholder={'邮箱'}/>
                    </div>
                    <div className={'register-content'}>
                        <Input size={"large"} value={this.state.name} onChange={this.handleName} placeholder={'用户名'}/>
                    </div>
                    <div className={'register-content'}>
                        <Input size={"large"} value={this.state.phone} onChange={this.handlePhone} placeholder={'手机号'}/>
                    </div>
                    <div className={'register-content margin_bottom_10px x2'} >
                        <Input.Password  size={"large"} value={this.state.password} onChange={this.handlePassword} placeholder={'密码'} />
                    </div>
                    <div>
                        <Button block size={"large"} onClick={this.submit} ghost >注册</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register
