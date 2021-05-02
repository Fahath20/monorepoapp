import { createStore, combineReducers, applyMiddleware } from 'redux';
import timerReducer from '../reducers/timerReducer';
import articleReducer from '../reducers/articleReducer';
import apiMiddleware from "../middleware/api";
 
const rootReducer = combineReducers({
    timer: timerReducer,
    data: articleReducer,
  })

const store = createStore(rootReducer, applyMiddleware(apiMiddleware));
console.log("Store", store)
export default store;
