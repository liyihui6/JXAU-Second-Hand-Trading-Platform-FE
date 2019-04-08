import React,{Component} from 'react'
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

class Forum extends Component{
    constructor(props) {
        super(props);
        this.state = {
            allData:[]
        }
    }
    componentWillMount(){
        // console.log(document.getElementById('forum-content-wrapper'))
        getProduct(this)
    }

    componentDidMount() {
        document.getElementById('forum-content-wrapper').scrollIntoView(true);//为ture返回顶部，false为底部
    }

    render() {
        return (
            <div className={'forum'}>
                <div className={'forum-header-wrapper'}>
                    <ForumHeader></ForumHeader>
                </div>
                <div className={'forum-content-wrapper'} id={'forum-content-wrapper'}>
                    {
                        this.state.allData.map((value,index) =>{
                            if (value.publishKinds !== 1){
                                return <div key={index} className={'forum-content-detail'}>
                                    <ForumContent datas={value}></ForumContent>
                                    <div className={'forum-content-comments'}>
                                        <ForumComment datas={value}></ForumComment>
                                    </div>
                                </div>
                            }else {
                                return null
                            }
                        })
                    }
                    {/*<div className={'forum-content-detail'}>*/}
                        {/*<ForumContent></ForumContent>*/}
                        {/*<div className={'forum-content-comments'}>*/}
                            {/*<ForumComment></ForumComment>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className={'forum-content-detail'}>*/}
                        {/*<ForumContent></ForumContent>*/}
                        {/*<div className={'forum-content-comments'}>*/}
                            {/*<ForumComment></ForumComment>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
                <div className={'footer'}>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default Forum
