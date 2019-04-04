import React,{Component} from 'react'
import info from './info.svg'
import './index.css'
import {Modal} from 'antd'

/**
 *
 * 首页通知组件
 *
 * **/
class Notice extends Component{
    constructor(props) {
        super(props);
        this.state = {
            all_visible: false,
            detail_visible: false
        }
    }

    showModal = () => {
        this.setState({
            all_visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            all_visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            all_visible: false,
        });
    }


    showDetailModal = () => {
        this.setState({
            detail_visible: true,
        });
    }

    handleDetailOk = (e) => {
        console.log(e);
        this.setState({
            detail_visible: false,
        });
    }

    handleDetailCancel = (e) => {
        console.log(e);
        this.setState({
            detail_visible: false,
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Modal
                        title="所有通知"
                        visible={this.state.all_visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <div className={'notice-options'}>
                            <div className={'notice-option'} onClick={this.showDetailModal}><span className={'notice-detail-content'}><p>Some contents Some contents Some contents Some contents...</p></span><span style={{float:'right'}}>2019-1-1</span></div>
                            <div className={'notice-option'} onClick={this.showDetailModal}><span className={'notice-detail-content'}><p>Some contents Some contents Some contents Some contents...</p></span><span style={{float:'right'}}>2019-1-1</span></div>
                            <div className={'notice-option'} onClick={this.showDetailModal}><span className={'notice-detail-content'}><p>Some contents Some contents Some contents Some contents...</p></span><span style={{float:'right'}}>2019-1-1</span></div>
                            <div className={'notice-option'} onClick={this.showDetailModal}><span className={'notice-detail-content'}><p>Some contents Some contents Some contents Some contents...</p></span><span style={{float:'right'}}>2019-1-1</span></div>
                            <div className={'notice-option'} onClick={this.showDetailModal}><span className={'notice-detail-content'}><p>Some contents Some contents Some contents Some contents...</p></span><span style={{float:'right'}}>2019-1-1</span></div>
                            <div className={'notice-option'} onClick={this.showDetailModal}><span className={'notice-detail-content'}><p>Some contents Some contents Some contents Some contents...</p></span><span style={{float:'right'}}>2019-1-1</span></div>
                            <div className={'notice-option'} onClick={this.showDetailModal}><span className={'notice-detail-content'}><p>Some contents Some contents Some contents Some contents...</p></span><span style={{float:'right'}}>2019-1-1</span></div>
                            <div className={'notice-option'} onClick={this.showDetailModal}><span className={'notice-detail-content'}><p>Some contents Some contents Some contents Some contents...</p></span><span style={{float:'right'}}>2019-1-1</span></div>
                            <div className={'notice-option'} onClick={this.showDetailModal}><span className={'notice-detail-content'}><p>Some contents Some contents Some contents Some contents...</p></span><span style={{float:'right'}}>2019-1-1</span></div>
                        </div>
                    </Modal>
                </div>
                <div>
                    <Modal
                        title="通知详情"
                        visible={this.state.detail_visible}
                        onOk={this.handleDetailOk}
                        onCancel={this.handleDetailCancel}
                    >
                        <p>通知详情</p>
                    </Modal>
                </div>
                <div className={'notice'}>
                    <div className={'notice-wrapper'}>
                        <img src={info} width={'30px'} height={'30px'} style={{marginRight:'35px',verticalAlign:'middle',display:'inline-block'}} alt=""/>
                        <div className={'notice-content'}>
                            <div style={{fontSize:'19px',color:'#888888'}}>通知</div>
                            <div style={{fontSize:'12px'}}><span className={'notice-new'}><p>暂时没有通知</p></span></div>
                        </div>
                    </div>
                    <div onClick={this.showModal} className={'allNotices'}>
                        查看全部通知 >>
                    </div>
                </div>
            </div>

        )
    }

}

export default Notice
