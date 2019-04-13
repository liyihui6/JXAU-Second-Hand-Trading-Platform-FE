import roomReducer from './reducer'
import {createStore} from 'redux'

const { composeWithDevTools } = require('redux-devtools-extension');

let store = createStore(roomReducer,composeWithDevTools())
export default store
