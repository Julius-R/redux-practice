import { combineReducers } from "redux";
import countReducer from "./Reducers/countReducer"
import wordReducer from './Reducers/wordReducer'

const rootReducer = combineReducers({
    count: countReducer,
    word: wordReducer
})

export default rootReducer