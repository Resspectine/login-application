import C from '../constants';

export const user = (state = {}, action) => {
    switch (action.type) {
        case C.LOGIN_USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};
