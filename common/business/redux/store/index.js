import { createStore, combineReducers, applyMiddleware } from 'redux';
import timerReducer from '../reducers/timerReducer';
import articleReducer from '../reducers/articleReducer';
import languageReducer from '../reducers/languageReducer';

import apiMiddleware from "../middleware/api";
 
const rootReducer = combineReducers({
    language: languageReducer,
    timer: timerReducer,
    data: articleReducer,
})

const store = createStore(rootReducer, applyMiddleware(apiMiddleware));
export default store;
