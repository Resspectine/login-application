import React from 'react';
import {connect} from 'react-redux';
import {loadNews} from "../../Store/actions/actions";
import NewsPage from './NewsPage';

const LoadNews = ({loadNews, ...rest}) => {
    loadNews();

    return <NewsPage {...rest}/>
};

export default connect(
    null,
    dispatch => ({
        loadNews() {
            dispatch(loadNews())
        }
    })
)(LoadNews);
