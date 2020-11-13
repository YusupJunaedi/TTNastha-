import { ActionType } from "redux-promise-middleware";

export const getEvent = "GET_EVENT";

export const pending = `_${ActionType.Pending}`;
export const fulfilled = `_${ActionType.Fulfilled}`;
export const rejected = `_${ActionType.Rejected}`;