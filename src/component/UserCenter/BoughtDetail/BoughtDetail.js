import React,{Component} from 'react'
import './index.css'
import BoughtDetailCard from './BoughtDetailCard'
import getUserProduct from '../../../api/FetchApi/getUserProduct'
import User from '../../../Storages/LocalStorages/User'

class BoughtDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            productInfo:[]
        }
    }

    componentWillMount() {
        let userId = User.getUser().userId
        getUserProduct(this,userId)
    }
    componentDidMount() {
        // this.imgLocation('bought-detail-content-wrapper','bought-detail-content')
    }

    goBack = () => {
        this.props.history.goBack()
    }

    // // 该函数实现了瀑布流布局
    // imgLocation = (cparentName,boxName) =>{
    //     let cParent = this.refs.par
    //     // 得到所有的box
    //     let childNodes = cParent.childNodes;
    //     console.log(childNodes)
    //     console.log(Array.prototype.slice.call(childNodes))
    //     // 计算得到一行最多放多少个box
    //     let cols = 2;
    //     let imgHeights = [];
    //     // 设置父容器的宽度
    //     // 遍历数组进行摆放图片实现瀑布流
    //     childNodes.forEach((value,index)=>{
    //         let i = index
    //         if(i<cols){//当小于一行可以摆放的时候添加进数组中
    //             imgHeights.push(childNodes[i].offsetHeight);
    //         }else{
    //             // 找到数组（一行的高度）最小值
    //             let minHeight = Math.min.apply(null,imgHeights);
    //             // 找到其位置
    //             let index = this.getIndex(imgHeights,minHeight);
    //             // 设置css样式实现定位
    //             childNodes[i].style.position = "absolute";
    //             childNodes[i].style.top = minHeight+"px";
    //             childNodes[i].style.left = childNodes[index].offsetLeft+"px";
    //             // 最后更新该位置的数据
    //             imgHeights[index] += childNodes[i].offsetHeight;
    //         }
    //     })
    //     // console.log(imgHeights)
    // }

// // 得到值为minHeight在数组arr的下标
//     getIndex = (arr,minHeight) => {
//         for(let i in arr){
//             if(arr[i]===minHeight){
//                 return i;
//             }
//         }
//     }

    render() {
        return (
            <div className={'bought-detail'}>
                <div className={'bought-detail-header'}>
                    <span className={'bought-detail-header-span'} onClick={this.goBack}> 《 </span>
                    <span className={'bought-detail-header-title'}>我发布的</span>
                </div>
                <div className={'bought-detail-content-wrapper'} ref={'par'}>
                    {
                        this.state.productInfo.map((value,index)=>{
                            return <div key={index} className={'bought-detail-content'}>
                                <BoughtDetailCard data={value}/>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default BoughtDetail
