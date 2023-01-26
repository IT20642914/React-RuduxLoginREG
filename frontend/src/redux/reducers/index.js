import { combineReducers } from "redux";

import { handleCartReducer, productReducer,selectedProductReducer} from "./productReducer";
import { accessKey } from "./authReducer";
import btnreducer from "./btnreducer"; 

const RootReducer =combineReducers({

    accessKey: accessKey,
    btnValue:btnreducer,
    allProducts:productReducer,
    product:selectedProductReducer,
    cart:handleCartReducer


})
export default RootReducer;

