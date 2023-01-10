import { combineReducers } from "redux";
import  btnValueReducer from './btnReducer';
import { productReducer,selectedProductReducer} from "./productReducer";



const RootReducer =combineReducers({

    // btnValue:btnValueReducer,
    allProducts:productReducer,
    product:selectedProductReducer

})
export default RootReducer;

