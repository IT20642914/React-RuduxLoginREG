import { combineReducers } from "redux";

import { handleCartReducer, productReducer,selectedProductReducer} from "./productReducer";



const RootReducer =combineReducers({

  
    allProducts:productReducer,
    product:selectedProductReducer,
    cart:handleCartReducer


})
export default RootReducer;

