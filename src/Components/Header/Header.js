import React from 'react';
import {NavLink} from "react-router-dom";
import LoginButton from './LoginButton'
import './style.css';

const Header = () =>
    <div className='header'>
        <div className='links'>
            <NavLink className='nav-link' to='/' activeClassName='selected' exact>Главная страница</NavLink>
            <NavLink className='nav-link' to='/news' activeClassName='selected'>Новости</NavLink>
            <NavLink className='nav-link' to='/profile' activeClassName='selected'>Профиль</NavLink>
        </div>
        <LoginButton/>
    </div>;

export default Header;
