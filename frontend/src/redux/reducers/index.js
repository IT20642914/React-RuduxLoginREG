import { combineReducers } from "redux";
import  btnValueReducer from './btnReducer';
import { handleCartReducer, productReducer,selectedProductReducer} from "./productReducer";



const RootReducer =combineReducers({

     btnValue:btnValueReducer,
    allProducts:productReducer,
    product:selectedProductReducer,
    cart:handleCartReducer


})
export default RootReducer;

