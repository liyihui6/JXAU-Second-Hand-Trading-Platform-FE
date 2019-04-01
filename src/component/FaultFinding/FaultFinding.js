import React,{Component} from 'react'
import './index.css'

/**
 *
 * 首页失物招领组件
 *
 * **/
class FaultFinding extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={'find'}>
                <div className={'find-title'}>
                    <h1>失物招领</h1>
                </div>
                <div className={'thing'}>
                    <div className={'card'}>校园卡</div>
                    <div className={'else'}>其他</div>
                </div>
            </div>
        );
    }
}

export default FaultFinding
