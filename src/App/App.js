import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import MainPage from '../Components/MainPage';
import Header from '../Components/Header';
import LoginPage from '../Components/LoginPage';
import NewsPage from '../Components/NewsPage';

const App = () =>
    <div>
        <Header/>
        <div className='page'>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/login' component={LoginPage}/>
                <Route exact path='/news' component={NewsPage}/>
            </Switch>
        </div>
    </div>;

export default App;
