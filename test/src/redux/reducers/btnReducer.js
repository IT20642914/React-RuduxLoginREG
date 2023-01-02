import { BtnActionTypes } from "../actionTypes/btnActionTypes";
const initialState = {
  btnValue: 0,
};
const btnValueReducer = (state = initialState, { type }) => {
  switch (type) {
    case BtnActionTypes.BTN_INCRESE:
      return {
        ...state,
        btnValue: state + 1,
      };
    default:
      return state;
  }
};
export default btnValueReducer;