import C from '../constants/constants';

export const news = (state = {}, action) => {
    switch (action.type) {
        case C.LOADING_NEWS:
            return {
                loadingNews: true
            };
        case C.NEWS_NOT_LOADED:
            return {
                error: action.message
            };
        case C.NEWS_LOADED:
            return {
                array: action.news
            };
        default:
            return state;
    }
};
