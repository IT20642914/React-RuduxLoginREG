import { productActiontype } from "../actionTypes/productActionTypes";
const initialState = {
    products: [
],
  };
export const productReducer =(state=initialState,{type,payload})=>{
 
switch (type) {
    case productActiontype.SET_PRODUCT:
      return {
        ...state,
        products:payload
      };

    default:
      return state;
  }

}; 

export const selectedProductReducer =(state={},{type,payload})=>{
  switch (type) {
    case productActiontype.SELECTED_PRODUCT:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
    
  }
}