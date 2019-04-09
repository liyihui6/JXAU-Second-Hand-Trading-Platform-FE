import React,{Component} from 'react'
import info from './info.svg'
import './index.css'
import {Modal} from 'antd'
import getNotice from "../../api/FetchApi/getFNotice";
import formatDate from '../../utils/formateDate'

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
            detail_visible: false,
            notices:[],
            detailTitle:'',
            detailContent:''
        }
    }

    showModal = () => {
        this.setState({
            all_visible: true,
        });
    }

    handleOk = (e) => {
        this.setState({
            all_visible: false,
        });
    }

    handleCancel = (e) => {
        this.setState({
            all_visible: false,
        });
    }


    showDetailModal(item) {
        this.setState({
            detail_visible: true,
            detailTitle:item.title,
            detailContent:item.content
        });
    }

    handleDetailOk = (e) => {
        this.setState({
            detail_visible: false,
        });
    }

    handleDetailCancel = (e) => {
        this.setState({
            detail_visible: false,
        });
    }
    componentDidMount() {
        getNotice(this)
    }


    render() {
        let message = this.state.notices
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
                            {
                                this.state.notices.map((item, index) => (
                                    <div className={'notice-option'} key={index} onClick={this.showDetailModal.bind(this,item)}><span className={'notice-detail-content'}><p>{item.content}</p></span><span style={{float:'right',maxWidth:'100px'}}>{formatDate(new Date(item.time),'yyyy-MM-dd')}</span></div>
                                ))
                            }
                            {/*<div className={'notice-option'} onClick={this.showDetailModal}><span className={'notice-detail-content'}><p>Some contents Some contents Some contents Some contents...</p></span><span style={{float:'right'}}>2019-10-10</span></div>*/}
                        </div>
                    </Modal>
                </div>
                <div>
                    <Modal
                        title={this.state.detailTitle}
                        visible={this.state.detail_visible}
                        onOk={this.handleDetailOk}
                        onCancel={this.handleDetailCancel}
                    >
                        <p>{this.state.detailContent}</p>
                    </Modal>
                </div>
                <div className={'notice'}>
                    <div className={'notice-wrapper'}>
                        <img src={info} width={'30px'} height={'30px'} style={{marginRight:'35px',verticalAlign:'middle',display:'inline-block'}} alt=""/>
                        <div className={'notice-content'}>
                            <div style={{fontSize:'19px',color:'#888888'}}>通知</div>
                            <div style={{fontSize:'12px'}}><span className={'notice-new'}>
                                <p>{
                                    (message&&message.length>0)?message[0].title:'暂时没有通知'
                                }</p>
                            </span></div>
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
