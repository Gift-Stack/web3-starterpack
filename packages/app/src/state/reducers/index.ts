// import external modules
import { combineReducers } from "redux";
import application from '../application/reducer'
import variables from "../variables/reducer"
const rootReducer = combineReducers({
  application,
  variables
});

export default rootReducer;
