let once = (function(){
    let memo = {}, i = 0;
    return function(fn){
        for(let key in memo){
            //匿名函数支持
            if(memo[key].func === fn||memo[key].func.toString() ===fn.toString()){
                return memo[key].result
            }
        }
        i += 1
        let result = fn()
        memo[i] = {func:fn, result:result}
        return result
    }
})()
export default once
