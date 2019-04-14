import {INITPRODUCTDATA,UPDATEPRODUCTDATA} from './action'

const initState = {
    allProduct:[]
}

const productReducer = (state=initState,action={}) => {
    switch (action.type) {
        case INITPRODUCTDATA:
            return {
                allProduct:action.payload
            }
        case UPDATEPRODUCTDATA:
            return {
                allProduct:[...state.allProduct,action.payload]
            }
        default:
            return state
    }
}

export default productReducer
