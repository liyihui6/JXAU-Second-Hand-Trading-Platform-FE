import React,{Component} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Carousels from '../Carousel/Carousel'
import Notice from '../Notice/Notice'
import Classification from '../Classification/Classification'
import FaultFinding from '../FaultFinding/FaultFinding'
import Sell from '../Sell/Sell'
import './index.css'
import getProduct from "../../api/FetchApi/getProduct";
import {connect} from 'react-redux'


/**
 *
 * 首页组件
 *
 * **/
const mapStateToProps = (state) => {
    return {
        ProductTimer: state.timerReducer.ProductTimer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProductTimer: (data) => {
            dispatch({
                type:'UPDATEPRODUCTTIMER',
                payload:data
            })
        }
    };
}

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        let func = async ()=>{
            getProduct()
        }
        if (!this.props.ProductTimer){
            func().then(()=>{
                let getProductTimer = setInterval(()=>{
                    getProduct()
                },2000)
                this.props.updateProductTimer(getProductTimer)
            })
        }
    }

    render() {
        return (
            <div className={"home"}>
                <div className={"layout-wrapper"}>
                    <div className={'header-wrapper'}>
                        <Header/>
                    </div>
                    <div className={"container-wrapper"}>
                        <div style={{width:'100%',height:'52px'}}>

                        </div>
                        <article>
                            <Carousels/>
                            <Notice/>
                            <Classification/>
                            <FaultFinding/>
                            <Sell allData={this.state.allData}/>
                        </article>
                    </div>
                    <div className={"footer"}>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
