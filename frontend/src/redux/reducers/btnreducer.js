import { BtnActionTypes } from "../actionTypes/btnActionTypes";
let initialState=
{
    btnValue:0,
}

const btnreducer=(state = initialState,{type})=>{
    switch(type){
        case BtnActionTypes.BTN_INCRESE:
            return {
                ...state,
                btnValue:state.btnValue + 1,

            }
            default :return state
    }
};
export default  btnreducer;