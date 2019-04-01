import React,{Component} from 'react'
import { Comment, Tooltip, List,Input } from 'antd';
import moment from 'moment';


/**
 *
 * 论坛评论组件
 *
 * **/

class ForumComment extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {
                    // actions: [<span>Reply to</span>],
                    author: 'Han Solo',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: (
                        <p>hello world</p>
                    ),
                    datetime: (
                        <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment().subtract(1, 'days').fromNow()}</span>
                        </Tooltip>
                    ),
                },
                {
                    // actions: [<span>Reply to</span>],
                    author: 'Han Solo',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: (
                        <p>hello world</p>
                    ),
                    datetime: (
                        <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment().subtract(2, 'days').fromNow()}</span>
                        </Tooltip>
                    ),
                },
            ]
        }
    }

    render() {
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
                footer={<div><Input placeholder={'评论:'}/></div>}
            />
        );
    }

}

export default ForumComment
