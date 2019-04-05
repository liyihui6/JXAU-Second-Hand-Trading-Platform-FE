import React,{Component} from 'react'
import { Carousel } from 'antd';
import qmb from './qm.jpg'
import tur from './true.jpg'
import qm from './qm.jpg'
import china from './china.jpg'

/**
 *
 * 首页轮播图组件
 *
 * **/

class Carousels extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Carousel autoplay>
                    <div><img src={qm} width={'100%'} height={'125px'} alt=""/></div>
                    <div><img src={tur} width={'100%'} height={'125px'} alt=""/></div>
                    <div><img src={qmb} width={'100%'} height={'125px'} alt=""/></div>
                    <div><img src={china} width={'100%'} height={'125px'} alt=""/></div>
                </Carousel>
            </div>
        )
    }

}

export default Carousels
