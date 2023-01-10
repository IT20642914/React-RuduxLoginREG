import { productActiontype } from "../actionTypes/productActionTypes";

export const setProduct=(products)=>{
    return {
        type:productActiontype.SET_PRODUCT,
        payload:products
    };
};
export const selectedProduct=(product)=>{
    return {
        type:productActiontype.SELECTED_PRODUCT,
        payload:product
    };
};

export const RemoveSelectedProduct=()=>{
    return {
        type:productActiontype.ROMOVE_SELECTED_PRODUCT,
      
    };
};