import C from '../constants/constants';

export const error = (state = '', action) => {
    switch (action.type) {
        case C.SET_ERROR:
            return action.message;
        case C.RELEASE_ERROR:
            return '';
        default:
            return state;
    }
};
