import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import {user} from "./reducers/user";
import {profile} from "./reducers/profile";
import {news} from "./reducers/news";
import {error} from "./reducers/error";

const defaultState = {profile: {}, user: {}, news: {}, error: ''};

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
        combineReducers({user, profile, news, error}),
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            {
                ...defaultState,
                ...initialState
            }
    )
};

export default storeFactory;
