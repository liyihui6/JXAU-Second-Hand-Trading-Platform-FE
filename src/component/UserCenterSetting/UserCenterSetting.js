import React,{Component} from 'react'
import './index.css'
import {Button,Input,message} from 'antd'
import UploadAvatar from './UploadAvatar/UploadAvatar'
import re from './return.svg'
import userSetting from '../../api/PostApi/userSetting'
import User from '../../Storages/LocalStorages/User'

class UserCenterSetting extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            phone:'',
            pic:'',
            photo:'',
            desc:'',
            userInfo:{}
        }
    }

    handleName = (e) => {
        this.setState({
            name:e.target.value
        })
    }
    handleDesc= (e) => {
        this.setState({
            desc:e.target.value
        })
    }

    handlePhone= (e) => {
        this.setState({
            phone:e.target.value
        })
    }

    handlePic= (filename) => {
        this.setState({
            pic:'http://127.0.0.1:5000/show/'+filename,
            photo:filename
        })
    }

    back =() => {
        this.props.history.goBack()
    }

    submit = () => {
        if (this.state.name.length<=0){
            message.error('昵称不能为空')
        } else if (this.state.phone.length !== 11){
            message.error('请输入正确的电话号码')
        } else if (this.state.desc.length<2){
            message.error('请输入至少2个字的个性签名')
        } else {
            let data = {
                name:this.state.name,
                phone:this.state.phone,
                pic:this.state.photo,
                desc:this.state.desc
            }
            userSetting(data,this.props.history)
        }
    }
    componentWillMount() {
        let info = User.getUser()
        this.setState({
            userInfo:info,
            email:info.userEmail,
            name:info.userNike,
            desc:info.userDes,
            phone:info.userPhone,
            pic:'http://127.0.0.1:5000/show/'+info.userPhotoPath
        })
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
                        <UploadAvatar imageUrl={this.state.pic} handlePic={this.handlePic}/>
                    </div>
                    <div>
                        <h3 className={'user-center-setting-content-input-title'}>邮箱</h3>
                        <Input disabled={true} placeholder={this.state.userInfo.userEmail}/>
                    </div>
                    <div>
                        <h3 className={'user-center-setting-content-input-title'}>昵称</h3>
                        <Input value={this.state.name} onChange={this.handleName}/>
                    </div>
                    <div>
                        <h3 className={'user-center-setting-content-input-title'}>个性签名</h3>
                        <Input value={this.state.desc} onChange={this.handleDesc}/>
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
