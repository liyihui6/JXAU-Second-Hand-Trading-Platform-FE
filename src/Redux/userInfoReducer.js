import {INITUSERINFO,UPDATEUSERINFO} from './action'

const initState = {
    userInfo: {}
}

const userInfoReducer = (state=initState,action={}) => {
    switch (action.type) {
        case INITUSERINFO:
            return {userInfo: action.payload}
        case UPDATEUSERINFO:
            return {userInfo: action.payload}
        default:
            return state
    }
}
export default userInfoReducer
