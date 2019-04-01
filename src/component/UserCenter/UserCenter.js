import React,{Component} from 'react'
import './index.css'
import CenterHeader from './CenterHeader/CenterHeader'
import CenterDetail from './CenterDetail/CenterDetail'
import Bought from './Bought/Bought'
import Sold from './Sold/Sold'
import Footer from '../Footer/Footer'

/**
 *
 * 用户中心组件
 *
 * **/

class UserCenter extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={'homepage'}>
                <div className={'center-header-wrapper'}>
                    <CenterHeader></CenterHeader>
                </div>
                <div className={'center-container-wrapper'}>
                    <CenterDetail></CenterDetail>
                    <div className={'none'}></div>
                    <div className={'center-container-wrapper-lists'}>
                        <div className={'center-container-wrapper-list'}>
                            <Bought></Bought>
                        </div>
                        <div className={'center-container-wrapper-list'}>
                            <Sold></Sold>
                        </div>
                    </div>
                </div>
                <div className={'footer'}>
                    <Footer></Footer>
                </div>
            </div>
        );
    }

}

export default UserCenter
