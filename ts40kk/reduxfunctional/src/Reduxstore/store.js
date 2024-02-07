import { combineReducers, createStore } from "redux";
import counterReducer from "./reducer";
import todoReducer from "./todoReducer";

const reducer = combineReducers({
    count: counterReducer,
    todo:todoReducer,
    
})
const store = createStore(reducer)
export default store