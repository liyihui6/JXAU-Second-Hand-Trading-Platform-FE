import {UPDATEROOMINFO,INITROOMINFO} from './action'

const initState = {
    userRoomList:[],
}
const roomReducer = (state = initState,action={}) => {
    switch (action.type) {
        case INITROOMINFO:
            console.log("更新")
            return {userRoomList:action.payload}
        case UPDATEROOMINFO:
            return {userRoomList:[...state.userRoomList,action.payload]}
        default:
            return state
    }
}

export default roomReducer
