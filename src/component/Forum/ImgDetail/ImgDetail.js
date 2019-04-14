import React,{Component} from 'react'
import {Upload,Modal} from 'antd'
import './index.css'
import img from '../ForumContent/img1.png'
import {PICTURESERVERIP} from "../../../config";

/**
 *
 * 论坛内容图片组件
 *
 * **/

class ImgDetail extends Component{
    constructor(props){
        super(props);
        /**
         * 初始值current 设为 90°
         * 第一次旋转 rotate(90deg)
         */
        this.state={
            visible:false,
            previewImage:'',
            current:90,
            transStyle:'',
            fileList: [],
        }
    }

    componentWillMount() {
        let fileList = []
        this.props.photos.forEach((value,index)=>{
            fileList.push({
                uid: index,
                name: index+'xxx.png',
                status: 'done',
                url: PICTURESERVERIP+'/show/'+value.articlePhotoPath,
            })
        })
        this.setState({
            fileList:fileList
        })
    }

    // 预览，设置查看的当前图片，设置弹框为展开
    preview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            visible: true
        });
    }
    // 取消预览，这里需要将下一次旋转的初始值0,rotate(0deg)
    cancelPreview= () => {
        this.setState({
            visible: false,
            current:90,
            transStyle:'rotate('+0+'deg)'
        });
    }
    //  点击选择  设置当前current旋转角度为上一次+90°
    translate = () => {
        this.setState({
            current:(this.state.current+90)%360,
            transStyle:'rotate('+this.state.current+'deg)'
        });
    }


    render() {
        return (
            <div className="hideDeleteBtn">
                <Upload
                    action="#"
                    listType="picture-card"
                    fileList={this.state.fileList}
                    onPreview={this.preview.bind(this)}
                />
                <Modal
                    visible={ this.state.visible }
                    onCancel={this.cancelPreview.bind(this)}
                    onOk={this.cancelPreview.bind(this)}
                >
                    <div style={{ marginTop:20,height:'50%', transform:this.state.transStyle, display:'flex', alignItems:'center'}}>
                        <img
                            alt="example"
                            style={{width: '100%',height:'100%' }}
                            src={this.state.previewImage}
                        />
                    </div>
                    {/* <div style={{clear:'both'}} /> */}
                </Modal>
            </div>
        );
    }
}

export default ImgDetail
