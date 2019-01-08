import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import {user} from "./reducers/reducers";

const defaultState = {news: [], user: {}};

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

const storeFactory = (initialState) => {
    return applyMiddleware(logger, saver, thunkMiddleware)(createStore)(
        user,
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            {
                ...defaultState,
                ...initialState
            }
    )
};

export default storeFactory;
