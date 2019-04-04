import React,{Component} from 'react'
import './index.css'
import {Button,Input} from 'antd'
import UploadAvatar from './UploadAvatar/UploadAvatar'

class UserCenterSetting extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={'user-center-setting'}>
                <div className={'user-center-setting-header'}>
                    <span>设置</span>
                </div>
                <div className={'user-center-setting-content'}>
                    <div>
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
                        <Button type={"primary"}>退出</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCenterSetting
