import C from '../constants/constants';

export const loginUser = (user, history) => {
    const loggingIn = () => ({type: C.LOGGING_IN});
    const loggedIn = ({name}) => ({type: C.LOGGED_IN, name});
    const loggingInFailed = (message) => ({type: C.LOGGING_IN_FAILED, message: message});

    return dispatch => {
        dispatch(loggingIn());

        fetch('/login', {method: 'POST', body: user}).then(
            response => {
                dispatch(loggedIn(response.body));
                history.push('/profile');
            },
            error => dispatch(loggingInFailed(error))
        );
    };
};

export const logout = () => ({
    type: C.LOGOUT
});
