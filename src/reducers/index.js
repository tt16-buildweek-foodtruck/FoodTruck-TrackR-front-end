import { combineReducers } from "redux";
import { menuReducer } from "./menuReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
	menuReducer,
	userReducer,
});
