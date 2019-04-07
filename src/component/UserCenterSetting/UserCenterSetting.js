import React,{Component} from 'react'
import './index.css'
import {Button,Input} from 'antd'
import UploadAvatar from './UploadAvatar/UploadAvatar'
import re from './return.svg'
import userSetting from '../../api/PostApi/userSetting'

class UserCenterSetting extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            phone:'',
            pic:''
        }
    }

    handleName = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    handlePhone= (e) => {
        this.setState({
            phone:e.target.value
        })
    }

    handlePic= (filename) => {
        this.setState({
            pic:filename
        })
    }

    back =() => {
        this.props.history.goBack()
    }

    submit = () => {
        let data = {
            name:this.state.name,
            phone:this.state.phone,
            pic:this.state.pic
        }
        console.log(data)
        userSetting(data,this.props.history)
    }


    render() {
        return (
            <div className={'user-center-setting'}>
                <div className={'user-center-setting-header'}>
                    <span onClick={this.back} className={'user-center-setting-header-back'}><img src={re} width={'30px'} alt=""/></span>
                    <span>设置</span>
                </div>
                <div className={'user-center-setting-content'}>
                    <div>
                        <h3 className={'user-center-setting-content-input-title'}>修改头像</h3>
                        <UploadAvatar handlePic={this.handlePic}></UploadAvatar>
                    </div>
                    <div>
                        <h3 className={'user-center-setting-content-input-title'}>邮箱</h3>
                        <Input disabled={true} placeholder={'3187858832@qq.com'}/>
                    </div>
                    <div>
                        <h3 className={'user-center-setting-content-input-title'}>昵称</h3>
                        <Input value={this.state.name} onChange={this.handleName}/>
                    </div>
                    <div>
                        <h3 className={'user-center-setting-content-input-title'}>手机号</h3>
                        <Input value={this.state.phone} onChange={this.handlePhone}/>
                    </div>
                    <div style={{width:'150px',display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                        <Button type={"primary"} onClick={this.submit}>保存</Button>
                        <Button type={"primary"} onClick={this.back}>退出</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCenterSetting
