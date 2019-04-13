import React,{Component} from 'react'
import './index.css'
import BoughtDetailCard from './BoughtDetailCard'
import getUserProduct from '../../../api/FetchApi/getUserProduct'
import User from '../../../Storages/LocalStorages/User'

class BoughtDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            productInfo:[]
        }
    }

    componentWillMount() {
        let userId = User.getUser().userId
        getUserProduct(this,userId)
    }

    goBack = () => {
        this.props.history.goBack()
    }

    deleteBoughtProduct = (id) => {
        this.setState({
            productInfo:this.state.productInfo.filter((item,index)=>{
                if (item.publishId === id){
                    return false
                } else {
                    return true
                }
            })
        })
    }


    render() {
        return (
            <div className={'bought-detail'}>
                <div className={'bought-detail-header'}>
                    <span className={'bought-detail-header-span'} onClick={this.goBack}> 《 </span>
                    <span className={'bought-detail-header-title'}>我发布的</span>
                </div>
                <div className={'bought-detail-content-wrapper'} ref={'par'}>
                    {
                        this.state.productInfo.length>1?this.state.productInfo.map((value,index)=>{
                            return <div key={index} className={'bought-detail-content'}>
                                <BoughtDetailCard deleteBoughtProduct={this.deleteBoughtProduct} data={value}/>
                            </div>
                        }):(
                            <div className={'forum-content--nodata'}>
                                <h1>暂无数据哦~</h1>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default BoughtDetail
