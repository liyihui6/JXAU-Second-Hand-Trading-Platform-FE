import {INITTIMER, UPDATEPRODUCTTIMER,UPDATECHATINFO,CLEARCHATINFO} from "./action";

const initState = {
    ProductTimer: '',
    ChatInfoTimer: ''
}

const timerReducer = (state=initState,action={}) => {
    switch (action.type) {
        case INITTIMER:
            return {
                ProductTimer: {},
                ChatInfoTimer: {}
            }
        case UPDATEPRODUCTTIMER:
            return Object.assign({}, state, {
                ProductTimer: action.payload
            })
        case UPDATECHATINFO:
            return Object.assign({}, state, {
                ChatInfoTimer: action.payload
            })
        case CLEARCHATINFO:
            return Object.assign({}, state, {
                ChatInfoTimer: ''
            })
        default:
            return state
    }
}

export default timerReducer
