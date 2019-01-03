import React from 'react';
import {NavLink} from "react-router-dom";
import './style.css';

const Header = () =>
    <div className='header'>
        <div className='links'>
            <NavLink className='nav-link' to='/' activeClassName='selected' exact>Main</NavLink>
            <NavLink className='nav-link' to='/news' activeClassName='selected'>News</NavLink>
            <NavLink className='nav-link' to='/profile' activeClassName='selected'>Profile</NavLink>
        </div>
    </div>;

export default Header;
