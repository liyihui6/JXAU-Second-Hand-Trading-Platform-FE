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
                        <Header></Header>
                    </div>
                    <div className={"container-wrapper"}>
                        <article>
                            <Carousels></Carousels>
                            <Notice></Notice>
                            <Classification></Classification>
                            <FaultFinding></FaultFinding>
                            <Sell></Sell>
                        </article>
                    </div>
                    <div className={"footer"}>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home