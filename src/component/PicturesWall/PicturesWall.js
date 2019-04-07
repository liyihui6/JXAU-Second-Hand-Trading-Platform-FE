import React from 'react'
import {Upload, Icon, Modal} from 'antd';

class PicturesWall extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
        filenames:[]
    };

    handleCancel = () => {
        this.setState({
            previewVisible: false
        })
    }

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({fileList}) => {
        this.setState({
            fileList:fileList,
        })
        let filenames = []
        try {
            fileList.forEach((item,index)=>{
                let temp = item.response
                filenames.push(temp[0].filename)
            })
            console.log(filenames)
            this.props.handlePics(filenames)
        }catch (e) {

        }
    }

    render() {
        const {previewVisible, previewImage, fileList} = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="clearfix">
                <Upload
                    action="http://127.0.0.1:5000/saveFiles"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 6 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{width: '100%'}} src={previewImage}/>
                </Modal>
            </div>
        );
    }
}

export default PicturesWall
