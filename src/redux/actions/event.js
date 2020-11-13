import * as actions from "./actionTypes";

export const getEvent = (data) => {
   return {
      type: actions.getEvent,
      payload: data,
   }
}