import C from '../constants/constants';

export const profile = (state = {}, action) => {
    switch (action.type) {
        case C.LOADING_PROFILE:
            return {
                loadingProfile: true
            };
        case C.PROFILE_NOT_LOADED:
            return {
                error: action.message
            };
        case C.PROFILE_LOADED:
            return {
                ...action.profile
            };
        default:
            return state;
    }
};
