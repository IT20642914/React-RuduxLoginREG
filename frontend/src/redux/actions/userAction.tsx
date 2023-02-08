import fakeStore from "../../Apis/fakeStore";
import { productActiontype } from "../actionTypes/productActionTypes";

export const fetchProducts = ():any => async (dispatch:any) => {
    const response = await fakeStore.get("/products");
    dispatch({ type: productActiontype.FETCH_PRODUCT, payload: response.data })
};
export const fetchProduct = (id: any):any => async (dispatch:any) => {
    const response = await fakeStore.get(`/products/${id}`);
    dispatch({ type: productActiontype.SELECTED_PRODUCT, payload: response.data })
};