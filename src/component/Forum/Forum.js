import React, {Component} from 'react'
import './index.css'
import ForumHeader from './ForumHeader/ForumHeader'
import ForumContent from './ForumContent/ForumContent'
import ForumComment from './ForumComment/ForumComment'
import Footer from '../../component/Footer/Footer'
import getProduct from "../../api/FetchApi/getProduct";


/**
 *
 * 论坛首页组件
 *
 * **/

class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: [],
            type: 4
        }
    }

    componentWillMount() {
        getProduct(this)
        let state = this.props.location.state
        this.setState({
            type: state.type
        })
    }

    componentDidMount() {
        document.getElementById('forum-content-wrapper').scrollIntoView(true);//为ture返回顶部，false为底部
    }

    render() {
        let type = this.state.type
        return (
            <div className={'forum'}>
                <div className={'forum-header-wrapper'}>
                    <ForumHeader/>
                </div>
                <div className={'forum-content-wrapper'} id={'forum-content-wrapper'}>
                    <div style={{width: '100%', height: '52px'}}>
                    </div>
                    {
                        this.state.allData.length>1?this.state.allData.map((value, index) => {
                            if (value.publishKinds !== 1 && (type === 2 || value.publishKinds === type)) {
                                return <div key={index} className={'forum-content-detail'}>
                                    <ForumContent datas={value}/>
                                    <div className={'forum-content-comments'}>
                                        <ForumComment datas={value}/>
                                    </div>
                                </div>
                            } else {
                                return null
                            }
                        }):(
                            <div className={'forum-content--nodata'}>
                                <h1>暂无数据哦~</h1>
                            </div>
                        )
                    }
                </div>
                <div className={'footer'}>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Forum
