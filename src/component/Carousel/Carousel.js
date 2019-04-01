import React,{Component} from 'react'
import { Carousel } from 'antd';
import bg from '../../assets/images/bg.jpg'

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
                    <div><img src={bg} width={'100%'} height={'125px'} alt=""/></div>
                    <div><img src={bg} width={'100%'} height={'125px'} alt=""/></div>
                    <div><img src={bg} width={'100%'} height={'125px'} alt=""/></div>
                    <div><img src={bg} width={'100%'} height={'125px'} alt=""/></div>
                </Carousel>
            </div>
        )
    }

}

export default Carousels
