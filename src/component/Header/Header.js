import React,{Component} from 'react'
import {Input} from 'antd'
import './index.css'
import menu from '../../assets/images/menu.png'

/**
 *
 * 首页的头部组件
 *
 * **/
class Header extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className={"header"}>
                <img src={menu} style={{verticalAlign: 'middle',marginRight:'40px'}} width={"24px"} alt=""/>
                <Input style={{display:'inline-block',maxWidth:'60%',verticalAlign: 'middle'}} placeholder={"请输入搜索内容"}/>
            </div>
        )
    }
}
export default Header
