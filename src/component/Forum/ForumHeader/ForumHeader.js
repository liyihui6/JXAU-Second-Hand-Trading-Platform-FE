import React,{Component} from 'react'
import './index.css'

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
                <span className={'forum-header-title'}>鱼塘</span>
                <span className={'add-forum'}>
                    发帖子
                </span>
            </div>
        );
    }
}

export default ForumHeader
