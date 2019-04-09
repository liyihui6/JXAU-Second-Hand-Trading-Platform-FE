import React,{Component} from 'react'
import './index.css'
import bought from './bought.svg'
import {Link} from "react-router-dom";

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
                    <Link to={'/bought/detail'}><span style={{verticalAlign: 'middle'}}>我买到的</span></Link>
                </div>
                <div>
                    <span>{this.props.length}</span>
                    <span> > </span>
                </div>
            </div>
        );
    }

}

export default Bought
