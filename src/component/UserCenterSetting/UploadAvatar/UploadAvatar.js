import React,{Component} from 'react'
import { Upload, Icon, message } from 'antd';
import './index.css'
import {PICTURESERVERIP} from "../../../config";


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class UploadAvatar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }

    beforeUpload = (file) => {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        // let datas = new FormData().append('file',isJPG && isLt2M)
        return isJPG && isLt2M;
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
        if (info.file.response[0].filename){
            this.props.handlePic(info.file.response[0].filename)
        }

    }



    render() {

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const imageUrl = this.props.imageUrl;

        return (
            <div className={'upload-avatar'}>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action={PICTURESERVERIP+"/saveFile"}
                    beforeUpload={this.beforeUpload}
                    onChange={this.handleChange}
                >
                    {imageUrl ? <img src={imageUrl} width={'126px'} alt="avatar" /> : uploadButton}
                </Upload>
            </div>
        );
    }
}

export default UploadAvatar
