import React from 'react';

const NewsTemplate = ({title, text}) => (
    <div>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
);

NewsTemplate.propTypes = {
    title: React.PropTypes.string,
    text: React.PropTypes.string
};

export default NewsTemplate;
