import { applyMiddleware, createStore } from 'redux'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducer'

let middleWare = applyMiddleware(thunk, logger)
 
const store = createStore(reducer, middleWare)
 
export default store