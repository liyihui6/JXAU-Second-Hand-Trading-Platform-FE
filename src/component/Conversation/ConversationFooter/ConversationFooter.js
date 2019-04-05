import React,{Component} from 'react'
import {Input} from 'antd'
import './index.css'

const Search = Input.Search;

class ConversationFooter extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className={'conversation-footer'}>
                <div className={'conversation-footer-input'}>
                    <Search
                        placeholder="input text"
                        enterButton="发送"
                        size="large"
                        onSearch={value => console.log(value)}
                    />
                </div>
            </div>
        );
    }

}

export default ConversationFooter
