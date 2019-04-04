import React,{Component} from 'react'
import './index.css'
import {Button,Input} from 'antd'
import UploadAvatar from './UploadAvatar/UploadAvatar'
import re from './return.svg'

class UserCenterSetting extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    back =() => {
        this.props.history.goBack()
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
                        <UploadAvatar></UploadAvatar>
                    </div>
                    <div>
                        <h3 className={'user-center-setting-content-input-title'}>邮箱</h3>
                        <Input/>
                    </div>
                    <div>
                        <h3 className={'user-center-setting-content-input-title'}>昵称</h3>
                        <Input/>
                    </div>
                    <div>
                        <h3 className={'user-center-setting-content-input-title'}>手机号</h3>
                        <Input/>
                    </div>
                    <div style={{width:'150px',display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                        <Button type={"primary"}>保存</Button>
                        <Button type={"primary"} onClick={this.back}>退出</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCenterSetting
