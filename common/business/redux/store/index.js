import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";

import timerReducer from '../reducers/timerReducer';
import loginReducer from '../reducers/loginReducer';
import apiReducer from '../reducers/userReducer';
import apiMiddleware from "../middleware/api";
import rootReducer from '../../../services/reducers';


// const rootReducer = combineReducers({
//   timerReducer,
//   login: loginReducer,
//   users
// });

// const store = configureStore({
// 	reducer: apiReducer
//   }); 
const store = createStore(rootReducer, applyMiddleware(apiMiddleware));
export default store;
