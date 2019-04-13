import React,{Component} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Carousels from '../Carousel/Carousel'
import Notice from '../Notice/Notice'
import Classification from '../Classification/Classification'
import FaultFinding from '../FaultFinding/FaultFinding'
import Sell from '../Sell/Sell'
import './index.css'


/**
 *
 * 首页组件
 *
 * **/
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }




    render() {
        return (
            <div>
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
export default Home
