import { createStore, combineReducers, applyMiddleware } from 'redux';
import timerReducer from '../reducers/timerReducer';
import articleReducer from '../reducers/articleReducer';
import languageReducer from '../reducers/languageReducer';
import themeReducer from '../reducers/switchThemeReducer';

import apiMiddleware from "../middleware/api";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    language: languageReducer,
    timer: timerReducer,
    data: articleReducer,
    theme: themeReducer
})
const middlewares = [apiMiddleware, thunk]

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
