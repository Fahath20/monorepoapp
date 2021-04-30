import { combineReducers } from "@reduxjs/toolkit";
import users from "./userReducer";

const serviceReducer = combineReducers({
  users
});

export default serviceReducer;
