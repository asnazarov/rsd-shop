import { combineReducers } from 'redux'
import catalog from './catalog';


type root = typeof rootReducer
export type rootState = ReturnType<root>

const rootReducer = combineReducers({ catalog })
export default rootReducer;
