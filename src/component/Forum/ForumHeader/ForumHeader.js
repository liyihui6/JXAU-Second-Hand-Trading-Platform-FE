import React,{Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

/**
 *
 * 论坛头部组件
 *
 * **/

class ForumHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div className={'forum-header'}>
                <span className={'forum-header-title'}>易网</span>
                <Link to={'/add/note'}>
                    <span className={'add-forum'}>
                        发帖子
                    </span>
                </Link>
            </div>
        );
    }
}

export default ForumHeader
