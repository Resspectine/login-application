import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';

import MainPage from '../Components/MainPage/MainPage';
import Header from '../Components/Header/Header';
import LoginPage from '../Components/LoginPage/LoginPage';
import NewsPage from '../Components/NewsPage/NewsPage';
import LogoutPage from '../Components/LogoutPage/LogoutPage';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';
import ProfilePage from '../Components/ProfilePage/ProfilePage';

const App = () =>
    <div>
        <Header/>
        <div className='page'>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/login' component={LoginPage}/>
                <Route exact path='/news' component={NewsPage}/>
                <Route exact path='/logout' component={LogoutPage}/>
                <PrivateRoute exact path='/profile' component={ProfilePage}/>
            </Switch>
        </div>
    </div>;

export default App;
