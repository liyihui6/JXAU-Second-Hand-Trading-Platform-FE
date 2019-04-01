import React,{Component} from 'react'
import './index.css'
import bought from './bought.svg'

/**
 *
 * 用户中心买入组件
 *
 * **/

class Bought extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={'center-tips'}>
                <div>
                    <img className={'center-tip-icon'} src={bought} alt=""/>
                    <span style={{verticalAlign: 'middle'}}>我买到的</span>
                </div>
                <div>
                    <span>0</span>
                    <span> > </span>
                </div>
            </div>
        );
    }

}

export default Bought
