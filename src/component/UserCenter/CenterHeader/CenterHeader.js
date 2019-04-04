import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

/**
 *
 * 用户中心头部组件
 *
 * **/

class CenterHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={'center-header'}>
                <div className={'center-user-info'}>
                    <span>我的</span>
                    <Link to={'/userCenterSetting'}><span className={'center-setting'}>设置</span></Link>
                </div>
            </div>
        );
    }
}

export default CenterHeader
