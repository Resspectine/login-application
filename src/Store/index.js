import {createStore, applyMiddleware} from "redux";
import {user} from "./reducers";

const logger = store => next => action => {
    console.groupCollapsed('dispatching', action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    next(action);
    console.log('next state', store.getState());
    console.groupEnd();
};

const saver = store => next => action => {
    let result = next(action);
    localStorage['redux-store'] = JSON.stringify(store.getState());
    return result;
};

const storeFactory = (initialState = {news: []}) => {
    return applyMiddleware(logger, saver)(createStore)(
        user,
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            initialState
    )
};

export default storeFactory;
