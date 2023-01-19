import { combineReducers } from "redux";

import { handleCartReducer, productReducer,selectedProductReducer} from "./productReducer";

import btnreducer from "./btnreducer"; 

const RootReducer =combineReducers({

    btnValue:btnreducer,
    allProducts:productReducer,
    product:selectedProductReducer,
    cart:handleCartReducer


})
export default RootReducer;

