import React,{Component} from 'react'
import {Modal,Button} from 'antd'
import './index.css'
import {Link} from 'react-router-dom'

class Add extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleCancel = () =>{
        this.props.handleCancel()
    }

    render() {
        return (
            <div className={'add'}>
                <Modal
                    title="发布商品"
                    visible={this.props.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                    align={null}
                    afterClose={null}
                >
                    <div className={'addOption'}>
                        <Button><Link to={'/add/product'}>发布闲置</Link></Button>
                        <Button><Link to={'/add/note'}>发帖子</Link></Button>
                        <Button><Link to={'/add/finding'}>失物招领</Link></Button>
                        <Button><Link to={'/add/else'}>其他</Link></Button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Add
