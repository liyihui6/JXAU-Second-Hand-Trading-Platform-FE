import React,{Component} from 'react'
// import {Card, Avatar,} from 'antd';
// import ContentTitle from './ContentTitle/ContentTitle'
import './index.css'

// const { Meta } = Card;

/**
 *
 * 消息内容组件
 *
 * **/

class MessageContent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }

    onChange = (checked) => {
        this.setState({ loading: !checked });
    }

    render() {
        // const { loading } = this.state;
        return (
            <div className={'message-content-wrapper'}>
                {/*<Card hoverable={true} style={{borderRadius: '0'}}>*/}
                    {/*<Meta*/}
                        {/*style={{float:'left'}}*/}
                        {/*avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}*/}
                        {/*title='李艺晖'*/}
                        {/*description="今天去吃饭"*/}
                    {/*/>*/}
                    {/*<p*/}
                        {/*style={{*/}
                            {/*fontSize: 14,*/}
                            {/*color: 'rgba(0, 0, 0, 0.85)',*/}
                            {/*fontWeight: 400,*/}
                            {/*float:'right'*/}
                        {/*}}*/}
                    {/*>*/}
                        {/*2019-1-1*/}
                    {/*</p>*/}
                {/*</Card>*/}
                <div className={'message-content-avatar'}>
                    <img src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} alt={'hello'}></img>
                </div>
                <div className={'message-content-info'}>
                    <div>
                        <span className={'message-content-info-username'}>李艺晖</span>
                        <span className={'message-content-info-time'}>2019-1-1</span>
                    </div>
                    <div className={'message-content-detail'}>
                        今晚去吃烤鱼
                    </div>
                </div>
            </div>
        );
    }

}

export default MessageContent
