import React,{Component} from 'react'
import add from './add.svg'
import {Link} from 'react-router-dom'
import './index.css'
import '../../assets/css/style.css'
import Add from '../../component/Add/Add'


/**
 *
 * 底部组件
 *
 * **/

class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {
            visible:false,
            redirect:false
        }
    }
    show = () =>{
        this.setState({
            visible:!this.state.visible
        })
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        return (
            <div>
                <ul className={'menu-wrapper'}>

                        <li className={'menu-content-wrapper'}>
                            <Link to="/">
                            <div className={'menu-content'}>
                                {/*<img src={home} width={'30px'} alt=""/>*/}
                                <span className={'icon-home'} style={{fontSize: '30px'}}/>
                                <div>闲鱼</div>
                            </div>
                            </Link>
                        </li>

                    <li className={'menu-content-wrapper'}>
                        <Link to="/forum">
                        <div className={'menu-content'}>
                            {/*<img src={pro} width={'30px'} alt=""/>*/}
                            <span className={'icon-product'} style={{fontSize: '30px'}}/>
                            <div>鱼塘</div>
                        </div>
                        </Link>
                    </li>
                    <li className={'menu-content-wrapper'} onClick={this.show}>
                        <div className={'menu-content'}>
                            <div className={'release-box'}>
                                <img className={'menu-release'} src={add} width={'50px'} alt=""/>
                            </div>
                            <div className={'release'}>发布</div>
                        </div>
                    </li>
                    <li className={'menu-content-wrapper'}>
                        <Link to="/messages">
                        <div className={'menu-content'}>
                            {/*<img src={msg} width={'30px'} alt=""/>*/}
                            <span className={'icon-msg'} style={{fontSize: '30px'}}/>
                            <div>消息</div>
                        </div>
                        </Link>
                    </li>
                    <li className={'menu-content-wrapper'}>
                        <Link to="/userCenter">
                        <div className={'menu-content'}>
                            {/*<img src={user} width={'30px'} alt=""/>*/}
                            <span className={'icon-user'} style={{fontSize: '30px'}}/>
                            <div>我的</div>
                        </div>
                        </Link>
                    </li>
                </ul>
                <Add visible={this.state.visible} handleCancel={this.handleCancel}></Add>
            </div>
        )
    }
}

export default Footer
