import C from '../constants/constants';
import {api} from "../../Helpers/config";

const apiCall = (url, options, dispatch, beforeCall, success, fail) => {
    return new Promise((resolve, reject) => {
        dispatch(beforeCall());

        fetch(api + url, options)
            .then(response => {
                return response.json();
            })
            .then(response => {
                if (response.status === 'ok') {
                    dispatch(success(response.data));
                    resolve(response.data);
                } else {
                    dispatch(fail(response.message));
                    reject(response.message);
                }
            })
            .catch(er => {
                dispatch(fail(JSON.stringify(er)));
                reject(er);
            })
    })
};

export const loginUser = (user, history) => {
    const loggingIn = () => ({type: C.LOGGING_IN});
    const loggedIn = ({id}) => ({type: C.LOGGED_IN, id});
    const loggingInFailed = (message) => ({type: C.LOGGING_IN_FAILED, message});

    return dispatch => {
        const options = {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                email: user.name,
                password: user.password
            })
        };

        apiCall(`/validate`, options, dispatch, loggingIn, loggedIn, loggingInFailed)
            .then(() => {
                history.push('/profile');
            })
            .catch(() => {
            });
    };
};

export const logout = () => ({
    type: C.LOGOUT
});

export const getProfileInfo = id => {
    const startLoading = () => ({type: C.LOADING_PROFILE});
    const profileNotLoaded = (message) => ({type: C.PROFILE_NOT_LOADED, message});
    const profileLoaded = (profile) => ({
        type: C.PROFILE_LOADED,
        profile
    });

    return dispatch => {
        const options = {
            method: 'GET'
        };

        apiCall(`/user-info/${id}`, options, dispatch, startLoading, profileLoaded, profileNotLoaded);
    }
};

export const loadNews = () => {
    const startLoading = () => ({type: C.LOADING_NEWS});
    const newsNotLoaded = (message) => ({type: C.NEWS_NOT_LOADED, message});
    const newsLoaded = (news) => ({
        type: C.NEWS_LOADED,
        news
    });

    return dispatch => {
        const options = {
            method: 'GET'
        };

        apiCall('/news', options, dispatch, startLoading, newsLoaded, newsNotLoaded);
    }
};

export const setError = message => ({
    type: C.SET_ERROR,
    message
});

export const releaseError = () => ({
    type: C.RELEASE_ERROR
});
