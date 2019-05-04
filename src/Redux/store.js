import roomReducer from './roomReducer'
import productReducer from './productReducer'
import userInfoReducer from './userInfoReducer'
import timerReducer from './timerReducer'
import {createStore,combineReducers} from 'redux'

const { composeWithDevTools } = require('redux-devtools-extension');
let reducers = combineReducers({
    productReducer,roomReducer,userInfoReducer,timerReducer
})

let store = createStore(reducers,composeWithDevTools())
export default store
