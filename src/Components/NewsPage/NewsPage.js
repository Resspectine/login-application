import React from 'react';
import {connect} from 'react-redux';

import NewsTemplate from './NewsTemplate';

const NewsPage = ({news}) =>
    <div className='news'>
        {news.map((el, i) =>
            <NewsTemplate key={i} {...el}/>
        )}
    </div>;

export default connect(state => ({news: state.news}))(NewsPage);
