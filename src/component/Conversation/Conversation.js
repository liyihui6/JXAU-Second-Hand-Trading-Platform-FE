import React,{Component} from 'react'
import ConversationFooter from './ConversationFooter/ConversationFooter'
import {Avatar} from 'antd'
import './index.css'


class Conversation extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount(){
        document.getElementById('root').scrollIntoView(true);//为ture返回顶部，false为底部
    }


    goBack = () => {
        this.props.history.goBack()
    }
    render() {
        return (
            <div className={'conversation'}>
                <div className={'conversation-header'}>
                    <div className={'conversation-header-wrapper'}>
                        <div onClick={this.goBack} className={'conversation-header-messages'}> 消息(20)</div>
                        <span className={'conversation-header-username'}>消息</span>
                        <div className={'conversation-header-setting'}>
                            123
                        </div>
                    </div>
                </div>
                <div className={'conversation-content-wrapper'}>
                    <div style={{width:'100%',height:'42px'}}></div>
                    <div className={'conversation-content'}>
                        <div className={'conversation-content-avatar'}><Avatar>U</Avatar></div>
                        <div className={'conversation-content-detail'}><p>hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world</p></div>
                    </div>
                    <div className={'conversation-content'}>
                        <div className={'conversation-content-avatar'}><Avatar>U</Avatar></div>
                        <div className={'conversation-content-detail'}><p>hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world</p></div>
                    </div>
                    <div className={'conversation-content'}>
                        <div className={'conversation-content-avatar'}><Avatar>U</Avatar></div>
                        <div className={'conversation-content-detail'}><p>hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world</p></div>
                    </div>
                    <div className={'conversation-content-self'}>
                        <div className={'conversation-content-avatar-self'}><Avatar>U</Avatar></div>
                        <div className={'conversation-content-detail-self'}><p>hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world</p></div>
                    </div>
                </div>
                <div className={'footer'}>
                    <ConversationFooter/>
                </div>
            </div>
        );
    }

}

export default Conversation
