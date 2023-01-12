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

export const AddToCart=(product)=>{
    return {
        type:productActiontype.ADD_TO_CART,
        payload: product
    };
};
export const DeleteFromCart=(product)=>{
    return {
        type:productActiontype.DELETE_FROM_CART,
        payload: product
    };
};
export const CartVluerIncrese=(product)=>{
    return {
        type:productActiontype.CART_VALUE_INCRESE,
        payload: product
    };
};
export const CartValueDescres=(product)=>{
    return {
        type:productActiontype.CART_VALUE_DESCRECE,
        payload: product
    };
};