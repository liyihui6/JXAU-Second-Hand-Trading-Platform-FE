import React,{Component} from 'react'
import './index.css'
import home from './home.svg'
import add from './add.svg'
import msg from './msg.svg'
import user from './user.svg'
import pro from './product.svg'
import {Link} from 'react-router-dom'

/**
 *
 * 底部组件
 *
 * **/

class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <ul className={'menu-wrapper'}>
                    <li className={'menu-content-wrapper'}>
                        <div className={'menu-content'}>
                            <img src={home} width={'30px'} alt=""/>
                            <div><Link to="/">闲鱼</Link></div>
                        </div>
                    </li>
                    <li className={'menu-content-wrapper'}>
                        <div className={'menu-content'}>
                            <img src={pro} width={'30px'} alt=""/>
                            <div><Link to="/forum">鱼塘</Link></div>
                        </div>
                    </li>
                    <li className={'menu-content-wrapper'}>
                        <div className={'menu-content'}>
                            <div className={'release-box'}>
                                <img className={'menu-release'} src={add} width={'50px'} alt=""/>
                            </div>
                            <div className={'release'}>发布</div>
                        </div>
                    </li>
                    <li className={'menu-content-wrapper'}>
                        <div className={'menu-content'}>
                            <img src={msg} width={'30px'} alt=""/>
                            <div><Link to="/messages">消息</Link></div>
                        </div>
                    </li>
                    <li className={'menu-content-wrapper'}>
                        <div className={'menu-content'}>
                            <img src={user} width={'30px'} alt=""/>
                            <div><Link to="/userCenter">我的</Link></div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer
