import {INITUSERINFO,UPDATEUSERINFO} from './action'

const initState = {}

const userInfoReducer = (state=initState,action={}) => {
    switch (action.type) {
        case INITUSERINFO:
            return action.payload
        case UPDATEUSERINFO:
            return action.payload
        default:
            return state
    }
}
export default userInfoReducer
