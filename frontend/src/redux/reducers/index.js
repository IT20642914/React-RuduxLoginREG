import { combineReducers } from "redux";

import { handleCartReducer, productReducer,selectedProductReducer} from "./productReducer";
import { loginReducer } from "./authReducer";
import btnreducer from "./btnreducer"; 

const RootReducer =combineReducers({

    login:loginReducer,
    btnValue:btnreducer,
    allProducts:productReducer,
    product:selectedProductReducer,
    cart:handleCartReducer


})
export default RootReducer;

