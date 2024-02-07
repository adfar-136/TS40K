import { applyMiddleware, combineReducers, createStore } from "redux";
import amoutnReducer from "./reducer";
import { thunk } from "redux-thunk";
const reducers = combineReducers({
    amount:amoutnReducer
})
const storeee = createStore(reducers,applyMiddleware(thunk));

export default storeee;