import React,{Component} from 'react'
import sold from './sold.svg'
import './index.css'
import {Link} from "react-router-dom";

/**
 *
 * 用户中心售卖组件
 *
 * **/


class Sold extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={'center-tips'}>
                <div>
                    <img className={'center-tip-icon'} src={sold} alt=""/>
                    <Link to={'/bought/detail'}><span style={{verticalAlign: 'middle'}}>我发布的</span></Link>

                </div>
                <div>
                    <span>{this.props.length}</span>
                    <span> > </span>
                </div>
            </div>
        );
    }

}

export default Sold
