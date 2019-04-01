import React,{Component} from 'react'
import './index.css'
import ForumHeader from './ForumHeader/ForumHeader'
import ForumContent from './ForumContent/ForumContent'
import ForumComment from './ForumComment/ForumComment'
import Footer from '../../component/Footer/Footer'

/**
 *
 * 论坛首页组件
 *
 * **/

class Forum extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={'forum'}>
                <div className={'forum-header-wrapper'}>
                    <ForumHeader></ForumHeader>
                </div>
                <div className={'forum-content-wrapper'}>
                    <div className={'forum-content-detail'}>
                        <ForumContent></ForumContent>
                        <div className={'forum-content-comments'}>
                            <ForumComment></ForumComment>
                        </div>
                    </div>
                    <div className={'forum-content-detail'}>
                        <ForumContent></ForumContent>
                        <div className={'forum-content-comments'}>
                            <ForumComment></ForumComment>
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

export default Forum
