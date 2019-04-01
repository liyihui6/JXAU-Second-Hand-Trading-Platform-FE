import React,{Component} from 'react'
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
                    <span className={'center-setting'}>设置</span>
                </div>
            </div>
        );
    }
}

export default CenterHeader
