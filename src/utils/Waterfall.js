let Waterfall = async (parent) => {
    await func(parent)
}

let func = (parent)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let heightArray = []
            let childs = parent.childNodes
            heightArray.push(0)
            heightArray.push(0)
            for (let i = 0;i < childs.length;i ++){
                // if (i<cols){
                //     heightArray.push(childs[i].offsetHeight)
                // }else {
                //
                // }
                let minHeight = Math.min(...heightArray)
                let index = heightArray.indexOf(minHeight)
                childs[i].style.position = 'absolute'
                childs[i].style.top = minHeight+'px'
                if (i%2===0){
                    childs[i].style.left = '10px'
                    childs[i].style.width = (childs[i].offsetWidth-10)+'px'
                }else {
                    childs[i].style.right = '10px'
                    childs[i].style.width = (childs[i].offsetWidth-10)+'px'
                }
                heightArray[index] += childs[i].offsetHeight-5
            }
        },800)

    })
}

export default Waterfall
