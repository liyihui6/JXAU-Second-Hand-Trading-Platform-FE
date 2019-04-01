import React,{Component} from 'react'
import sold from './sold.svg'
import './index.css'

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
                    <span style={{verticalAlign: 'middle'}}>我发布的</span>
                </div>
                <div>
                    <span>0</span>
                    <span> > </span>
                </div>
            </div>
        );
    }

}

export default Sold
