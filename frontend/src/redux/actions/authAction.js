import { authActionTypes } from "../actionTypes/authActionType";

export const setAccessKey = (accessKey) => ({
    type: authActionTypes.SET_ACCESS_KEY,
    payload:accessKey,
  });