import RootReducer from "./reducers";
import { createStore } from "redux";
import { persistStore ,persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:'persist-key',
    storage
}

const persistedReducer = persistReducer(persistConfig,RootReducer)
export const store= createStore(
    persistedReducer,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const  persistore=persistStore(store)
export {persistore}