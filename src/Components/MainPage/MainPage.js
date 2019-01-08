import React from 'react';
import {Link} from "react-router-dom";
import './style.css';

const MainPage = () => (
    <div className='main'>
        <Link to='/login'>Log in</Link>
    </div>
);

export default MainPage;
