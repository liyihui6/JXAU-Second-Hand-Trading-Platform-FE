import React,{Component} from 'react'
import {Modal,Button} from 'antd'
import './index.css'

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
            <div>
                <Modal
                    title="发布商品"
                    visible={this.props.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                    align={null}
                >
                    <div className={'add'}>
                        <Button>发布闲置</Button>
                        <Button>发表帖子</Button>
                        <Button>信用回收</Button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Add
