/* eslint-disable no-unreachable */
import { productActiontype } from "../actionTypes/productActionTypes";
const initialState = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case productActiontype.SET_PRODUCT:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case productActiontype.SELECTED_PRODUCT:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

const cart = [

]

export const handleCartReducer = (state = cart, { type, payload }) => {
  const product = payload;
  switch (type) {
    case productActiontype.ADD_TO_CART: {
      //chek if product is already Exisit
      const itemInCart = state.find((item) => item.id === product.id);
      if (itemInCart) {
        return state.map((item) =>
          item.id === product.id ? { ...item, quantity:item.quantity + 1 } : item
        );
      } else {
        const product = payload;
        return [...state, { ...product, quantity: 1 }];
      }
      break;
    }
   
 

 case productActiontype.DELETE_FROM_CART:{
  const  itemExist=state.find((item)=> item.id === product.id );
  if(itemExist.quantity === 1){
    return state.filter((item)=> item.id !== itemExist.id) 
  }else{
    return state.map((item)=>
    item.id=== product.id ? {...item,quantity:item.quantity-1}:item)
  }
  break;

}

default:
  return state;



  }
};
