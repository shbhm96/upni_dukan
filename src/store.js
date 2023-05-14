import { applyMiddleware, compose } from "redux";
import { initialState, rootReducer } from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { legacy_createStore as makeStore } from "redux";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = makeStore(rootReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default store;