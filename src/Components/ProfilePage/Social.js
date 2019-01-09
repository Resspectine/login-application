import React from 'react';
import {icons} from "../../Helpers/socialIcons";

const Social = ({link, label}) => (
    <a target='_blank' href={link}>
        <img alt={label} src={icons[label]}/>
    </a>
);

export default Social;
