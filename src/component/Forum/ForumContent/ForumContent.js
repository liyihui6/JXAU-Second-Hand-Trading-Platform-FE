import React,{Component} from 'react'
import './index.css'
import ava from './123.jpg'
import {Avatar} from 'antd'
import ImgDetail from '../ImgDetail/ImgDetail'

/**
 *
 * 论坛内容组件
 *
 * **/

class ForumContent extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div className={'forum-content'}>
                <div className={'forum-content-header'}>
                    <div className={'forum-content-header-avatar'}>
                        <Avatar src={'http://127.0.0.1:5000/show/'+this.props.datas.user.userPhotoPath} alt=""/>
                    </div>
                    <div className={'forum-content-header-username'}>
                        {this.props.datas.user.userNike}
                    </div>
                </div>
                <div className={'forum-content-content'}>
                    <p>{this.props.datas.publishContent||'hello world'}</p>
                </div>
                <div className={'forum-content-images'}>
                    <ImgDetail></ImgDetail>
                </div>
            </div>
        );
    }

}

export default ForumContent
