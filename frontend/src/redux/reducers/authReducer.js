import { authActionTypes } from "../actionTypes/authActionType";

const initialState = {
    accessKey: null,
  };
  
  export const accessKey = (state = initialState, {type,payload}) => {
    switch (type) {
      case authActionTypes.SET_ACCESS_KEY:
        return {
          ...state,
          accessKey: payload,
        };
      default:
        return state;
    }
  };
  