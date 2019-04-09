import React,{Component} from 'react'
import { Card, Icon, Avatar , Modal, Button } from 'antd';
import deleteProduct from '../../../api/FetchApi/deleteProduct'
const { Meta } = Card;

class BoughtDetailCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    deleteProduct = () => {
        this.showModal()
    }

    editProduct = () => {
        console.log('edit')
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(this.props.data.publishId)
        let id = this.props.data.publishId
        deleteProduct(id)
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    render() {
        let data = this.props.data
        // console.log(data)
        let photoPath = data.commodityPhotos[0]
        let photo = photoPath?'http://127.0.0.1:5000/show/'+photoPath.articlePhotoPath:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
        let content = data.publishContent?data.publishContent:'暂无描述'
        return (
            <div>
                <Card
                    title={data.publishTitle}
                    style={{ width: '100%' }}
                    cover={<img alt="example" src={photo} style={{width:'156px',height:'156px'}} />}
                    actions={[<Icon type="delete" onClick={this.deleteProduct} />, <Icon type="edit" onClick={this.editProduct} />]}
                >
                    <Meta
                        description={content}
                    />
                </Card>
                <Modal
                    title="警告"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>确认删除？</p>
                </Modal>
            </div>
        );
    }

}

export default BoughtDetailCard
