import React from 'react';
import {connect} from 'react-redux';

const NewsPage = ({news, history}) =>
    <div className='news'>
        {news.map((el, i) => (
                (<div key={i} onClick={() => history.goBack()}>
                    <h3>{el.title}</h3>
                    <p>{el.text}</p>
                </div>)
            )
        )}
    </div>;

export default connect(state => ({news: state.news}))(NewsPage);
