import React,{Component} from 'react'
import info from './info.svg'
import './index.css'

/**
 *
 * 首页通知组件
 *
 * **/
class Notice extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={'notice'}>
                <div className={'notice-wrapper'}>
                    <img src={info} width={'30px'} height={'30px'} style={{marginRight:'35px',verticalAlign:'middle',display:'inline-block'}} alt=""/>
                    <div className={'notice-content'}>
                        <div style={{fontSize:'19px',color:'#888888'}}>通知</div>
                        <div>暂时没有通知</div>
                    </div>
                </div>
                <div className={'allNotices'}>
                    查看全部通知 >>
                </div>
            </div>
        )
    }

}

export default Notice
