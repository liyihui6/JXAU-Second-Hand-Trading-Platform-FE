import roomReducer from './roomReducer'
import productReducer from './productReducer'
import {createStore,combineReducers} from 'redux'

const { composeWithDevTools } = require('redux-devtools-extension');
let reducers = combineReducers({
    productReducer,roomReducer
})

let store = createStore(reducers,composeWithDevTools())
export default store
