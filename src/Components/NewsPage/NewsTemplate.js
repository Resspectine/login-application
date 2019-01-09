import React from 'react';
import PropTypes from 'prop-types';

const NewsTemplate = ({title, text}) => (
    <div>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
);

NewsTemplate.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
};

export default NewsTemplate;
