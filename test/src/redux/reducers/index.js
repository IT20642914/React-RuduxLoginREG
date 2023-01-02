import { combineReducers } from "redux";
import  btnValueReducer from './btnReducer';

const RootReducer =combineReducers({

    btnValue:btnValueReducer
})
export default RootReducer;

