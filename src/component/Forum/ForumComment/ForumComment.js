import React,{Component} from 'react'
import { Comment, Tooltip, List,Input,message} from 'antd';
import moment from 'moment';
import CommentButton from './CommentButton'
import User from '../../../Storages/LocalStorages/User'
import addComment from '../../../api/PostApi/addComment'


/**
 *
 * 论坛评论组件
 *
 * **/

class ForumComment extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            content:'',
            showButton:false
        }
    }

    handleContent = (e) => {
        this.setState({
            content:e.target.value
        })
    }

    showButton = () => {
        this.setState({
            showButton:true
        })
    }

    hideButton= () => {
        this.setState({
            showButton:false
        })
    }

    submit = () => {
        if (this.state.content.length<5){
            message.error('请至少输入5个字的评论')
        }
        let tempData = {
            articleCommentContent:this.state.content,
            fkArticleId:this.props.datas.publishId,
            fkUserId:User.getUser().userId
        }
        addComment(tempData,this)
        let datas = []
        this.state.data.forEach(value=>{
            datas.push(value)
        })
        let user = User.getUser()
        datas.push({
            author: user.userNike,
            avatar: 'http://127.0.0.1:5000/show/'+user.userPhotoPath,
            content: (
                <p>{tempData.articleCommentContent}</p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(30, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(30, 'days').fromNow()}</span>
                </Tooltip>
            ),
        })
        this.setState({
            data:datas
        })
    }

    clearContent = ()=> {
        this.setState({
            content:''
        })
    }
    componentWillMount() {
        let datas = []
        this.props.datas.articleComments.forEach((value,index) => {
            datas.push({
                author: value.commentUserNike,
                avatar: 'http://127.0.0.1:5000/show/'+value.commentUserPhonePath,
                content: (
                    <p>{value.articleCommentContent}</p>
                ),
                datetime: (
                    <Tooltip title={moment().subtract(30, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().subtract(30, 'days').fromNow()}</span>
                    </Tooltip>
                ),
            })
        })
        this.setState({
            data:datas
        })
    }

    render() {
        // console.log(this.props.datas.articleComments)
        return (
            <List
                className="comment-list"
                // header={`${this.state.data.length} replies`}
                itemLayout="horizontal"
                dataSource={this.state.data}
                renderItem={item => (
                    <Comment
                        actions={item.actions}
                        author={item.author}
                        avatar={item.avatar}
                        content={item.content}
                        datetime={item.datetime}
                    />
                )}
                footer={
                    <div style={{overflow:'auto'}}><Input onFocus={this.showButton} value={this.state.content} onChange={this.handleContent} placeholder={'请至少输入5个字的评论'}/>
                        <CommentButton clearContent={this.clearContent} submit={this.submit} hideButton={this.hideButton} showButton={this.state.showButton}/>
                    </div>
                }
            />
        );
    }

}

export default ForumComment
