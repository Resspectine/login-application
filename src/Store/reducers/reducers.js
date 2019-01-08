import C from '../constants/constants';

export const user = (state = {}, action) => {
    switch (action.type) {
        case C.LOGGED_IN:
            return {
                ...state,
                user: {
                    name: action.name,
                    loggedIn: true
                }
            };
        case C.LOGGING_IN_FAILED:
            return {
                ...state,
                user: {
                    loggingFailed: action.message
                }
            };
        case C.LOGGING_IN:
            return {
                ...state,
                user: {
                    loggingIn: true
                }
            };
        case C.LOGOUT:
            return {
                ...state,
                user: {}
            };
        default:
            return state;
    }
};
