import React,{Component} from 'react'
import {Link} from 'react-router-dom'
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
                    <div className={'card'}>
                        <Link to={'/commodityDetails'}>
                        校园卡
                        </Link>
                    </div>
                    <div className={'else'}>
                        <Link to={'/commodityDetails'}>
                        其他
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default FaultFinding
