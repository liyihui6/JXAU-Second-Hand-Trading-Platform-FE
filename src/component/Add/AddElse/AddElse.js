import React,{Component} from 'react'
import {Input, message} from "antd";
import PicturesWall from "../../PicturesWall/PicturesWall";
import login from "../../../Storages/SessionStorages/LoginSession";
import addProduct from "../../../api/PostApi/addProduct";
import user from "../../../Storages/LocalStorages/User";

class AddElse extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            content:'',
            pics:[]
        }
    }

    componentWillMount() {
        if (!login.isLogin()){
            this.props.history.push('/login')
        }
    }

    onCancel = ()=>{
        this.props.history.goBack()
    }

    handleTitle = (e) => {
        this.setState({
            title:e.target.value
        })
    }

    handleContent = (e) => {
        this.setState({
            content:e.target.value
        })
    }

    handlePics = (fileList) => {
        this.setState({
            pics:fileList
        })
    }

    submit = () => {
        if (this.state.content.length<20){
            message.error('请至少输入20个字的描述')
        } else if (this.state.pics.length < 1){
            message.error('请至少添加一张图片描述')
        } else if (this.state.title < 2){
            message.error('请至少输入2个字的标题')
        }else {
            let data = {
                publishKinds:4,
                publishTitle:this.state.title,
                publishContent:this.state.content,
                pics:this.state.pics,
                fkUserId:user.getUser()['userId'],
            }
            addProduct(data,this.props.history)
        }
    }

    render() {
        const { TextArea } = Input;
        return (

            <div className={'add-note'}>
                <div className={'add-note-header'}>
                    <span className={'add-note-cancel'} onClick={this.onCancel}>取消</span>
                    <span className={'add-note-title'}>其他</span>
                    <span className={'add-note-submit'} onClick={this.submit}>发表</span>
                </div>
                <div className={'add-note-content'}>
                    <div className={'add-note-content-title'}>
                        <span style={{fontSize:'20px',padding:'5px 0 0 0'}}>标题</span>
                        <Input value={this.state.title} onChange={this.handleTitle} style={{marginTop: '5px'}} placeholder={'标题'}/>
                    </div>
                    <div className={'add-note-content-input'}>
                        <span style={{fontSize:'20px',padding:'5px 0 0 0'}}>内容</span>
                        <TextArea value={this.state.content} onChange={this.handleContent} rows={6} placeholder={'说点什么吧...'}/>
                    </div>
                    <div className={'add-note-input-pics'}>
                        <PicturesWall handlePics={this.handlePics}/>
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

export default AddElse
