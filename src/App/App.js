import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import MainPage from '../Components/MainPage/MainPage';
import Header from '../Components/Header/Header';
import LoginPage from '../Components/LoginPage/LoginPage';
import LoadNews from '../Components/NewsPage/LoadNews';
import LogoutPage from '../Components/LogoutPage/LogoutPage';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';
import LoadProfile from '../Components/ProfilePage/LoadProfile';


const App = () =>
    <div>
        <Header/>
        <div className='page'>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/login' component={LoginPage}/>
                <Route exact path='/news' component={LoadNews}/>
                <Route exact path='/logout' component={LogoutPage}/>
                <PrivateRoute exact path='/profile' component={LoadProfile}/>
            </Switch>
        </div>
    </div>;

export default App;
