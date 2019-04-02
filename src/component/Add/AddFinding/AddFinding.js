import React,{Component} from 'react'
import {Input} from 'antd'
import './index.css'
import PicturesWall from "../../PicturesWall/PicturesWall";

class AddFinding extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    onCnacel = ()=>{
        this.props.history.goBack()
    }
    render() {
        const { TextArea } = Input;

        return (
            <div className={'add-note'}>
                <div className={'add-note-header'}>
                    <span className={'add-note-cancel'} onClick={this.onCnacel}>取消</span>
                    <span className={'add-note-title'}>失物招领</span>
                    <span className={'add-note-submit'}>发表</span>
                </div>
                <div className={'add-note-content'}>
                    <div className={'add-note-content-title'}>
                        <span style={{fontSize:'20px',padding:'5px 0 0 0'}}>标题</span>
                        <Input style={{marginTop: '5px'}} placeholder={'标题'}/>
                    </div>
                    <div className={'add-note-content-input'}>
                        <span style={{fontSize:'20px',padding:'5px 0 0 0'}}>内容</span>
                        <TextArea rows={6} placeholder={'说点什么吧...'}/>
                    </div>
                    <div className={'add-note-input-pics'}>
                        <PicturesWall></PicturesWall>
                    </div>
                    <div className={'add-note-tag add-note-tag-common'}>
                        <span>添加标签</span>
                        <span> > </span>
                    </div>
                    <div className={'add-note-address add-note-tag-common'}>
                        <span>地点</span>
                        <span> > </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddFinding
