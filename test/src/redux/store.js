import RootReducer from "./reducers";
import { createStore } from "redux";

export const store= createStore(
    RootReducer,{}
);