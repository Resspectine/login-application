import C from '../constants/constants';

export const user = (state = {}, action) => {
    switch (action.type) {
        case C.LOGGED_IN:
            return {
                userId: action.id,
                loggedIn: true,
            };
        case C.LOGGING_IN_FAILED:
            return {
                error: action.message
            };
        case C.LOGGING_IN:
            return {
                loggingIn: true
            };
        case C.LOGOUT:
            return {
            };
        default:
            return state;
    }
};
