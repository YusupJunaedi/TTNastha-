import { combineReducers } from "redux";
import eventReducer from "./event";

const indexReducer = combineReducers({
   event: eventReducer,
});

export default indexReducer;