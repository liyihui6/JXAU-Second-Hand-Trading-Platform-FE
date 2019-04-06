import React,{Component} from 'react'
import {Button,message} from "antd";

class CommentButton extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    submit = () => {
        this.props.submit()
        this.props.clearContent()
        this.props.hideButton()
        message.success('发表成功!')
    }

    oncancel = () => {
        this.props.clearContent()
        this.props.hideButton()
    }
    render() {
        return (
            this.props.showButton?<div>
                <Button onClick={this.submit} type={"primary"} style={{float:'right',marginTop:'6px'}}>发表</Button>
                <Button onClick={this.oncancel} type={"primary"} style={{float:'right',margin:'6px 5px 0 0'}}>取消</Button>
            </div>:null
        );
    }

}

export default CommentButton
