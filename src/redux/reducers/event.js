import * as actions from "../actions/actionTypes";

const intialState = {
   title: "",
   list: [],
   isPending: false,
   isFulfilled: false,
   isRejected: false,
}

const eventReducer = (state = intialState, { type, payload }) => {
   switch (type) {
      case actions.getEvent :
         return {
            ...state,
            list: payload,
            isFulfilled: true
         }
      default:
         return state;
   }
}

export default eventReducer;