let Waterfall = async (parent) => {
    setTimeout(()=>{
        let heightArray = []
        let cols = 2
        let childs = parent.childNodes
        for (let i = 0;i < childs.length;i ++){
            if (i<cols){
                heightArray.push(childs[i].offsetHeight)
            }else {
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
                heightArray[index] += childs[i].offsetHeight
            }
        }
    },100)
}

export default Waterfall
