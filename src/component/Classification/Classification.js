import React, {Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import threeBall from '../../assets/images/三球.svg'
import people from '../../assets/images/地球.svg'
import space from '../../assets/images/太空.svg'
import moon from '../../assets/images/星月.svg'
import star from '../../assets/images/星球.svg'
import star_2 from '../../assets/images/星轨.svg'
import rocket from '../../assets/images/火箭2.svg'
import ball from '../../assets/images/球.svg'
import ship from '../../assets/images/飞船.svg'
import blue from '../../assets/images/蓝球.svg'

/**
 *
 * 首页分类组件
 *
 * **/
class Classification extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <ul className={"models"}>
                <li className={'product'}>
                    <Link to={{pathname:'/allProduct',state:{tag:'book'}}} className={'link'}>
                        <img src={blue} className={'classify-link-icon'} alt=""/>
                        <div className={'model-tip'}>书籍</div>
                    </Link>
                </li>
                <li className={'product'}>
                    <Link to={{pathname:'/allProduct',state:{tag:'clothes'}}} className={'link'}>
                        <img src={people} className={'classify-link-icon'} alt=""/>
                        <div className={'model-tip'}>衣物</div>
                    </Link>
                </li>
                <li className={'product'}>
                    <Link to={{pathname:'/allProduct',state:{tag:'phone'}}} className={'link'}>
                        <img src={space} className={'classify-link-icon'} alt=""/>
                        <div className={'model-tip'}>手机平板</div>
                    </Link>
                </li>
                <li className={'product'}>
                    <Link to={{pathname:'/allProduct',state:{tag:'cook'}}} className={'link'}>
                        <img src={moon} className={'classify-link-icon'} alt=""/>
                        <div className={'model-tip'}>厨具</div>
                    </Link>
                </li>
                <li className={'product'}>
                    <Link to={{pathname:'/allProduct',state:{tag:'computer'}}} className={'link'}>
                        <img src={star} className={'classify-link-icon'} alt=""/>
                        <div className={'model-tip'}>电脑配件</div>
                    </Link>
                </li>
                <li className={'product'}>
                    <Link to={{pathname:'/allProduct',state:{tag:'help'}}} className={'link'}>
                        <img src={star_2} className={'classify-link-icon'} alt=""/>
                        <div className={'model-tip'}>帮助</div>
                    </Link>
                </li>
                <li className={'product'}>
                    <Link to={{pathname:'/allProduct',state:{tag:'house'}}} className={'link'}>
                        <img src={rocket} className={'classify-link-icon'} alt=""/>
                        <div className={'model-tip'}>租房</div>
                    </Link>
                </li>
                <li className={'product'}>
                    <Link to={{pathname:'/allProduct',state:{tag:'car'}}} className={'link'}>
                        <img src={ball} className={'classify-link-icon'} alt=""/>
                        <div className={'model-tip'}>车子</div>
                    </Link>
                </li>
                <li className={'product'}>
                    <Link to={{pathname:'/allProduct',state:{tag:'self'}}} className={'link'}>
                        <img src={ship} className={'classify-link-icon'} alt=""/>
                        <div className={'model-tip'}>健身</div>
                    </Link>
                </li>
                <li className={'product'}>
                    <Link to={{pathname:'/allProduct',state:{tag:'else'}}} className={'link'}>
                        <img src={threeBall} className={'classify-link-icon'} alt=""/>
                        <div className={'model-tip'}>其他</div>
                    </Link>
                </li>
            </ul>
        )
    }
}

export default Classification
