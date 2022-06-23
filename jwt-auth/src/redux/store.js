import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import {persistStore} from 'redux-persist'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'


const middlewares = [thunk];

if(process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}
const initialState = {};

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);

