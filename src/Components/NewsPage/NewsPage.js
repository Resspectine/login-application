import React from 'react';
import {connect} from 'react-redux';

import NewsTemplate from './NewsTemplate';
import ErrorMessages from '../ErrorMessage/ErrorMessage';

const NewsPage = ({news, loadingNews, error}) =>
    loadingNews ?
        <p>Loading news..</p> :
        error ?
            <ErrorMessages messages={error}/> :
            <div className='news'>
                {[...news].map((el, i) =>
                    <NewsTemplate key={i} {...el}/>
                )}
                <p>Всего новостей: {news.length}</p>
            </div>;

export default connect(
    store => ({
        news: store.news.array,
        loadingNews: store.news.loadingNews,
        error: store.news.error
    })
)(NewsPage);
