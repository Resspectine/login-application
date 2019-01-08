import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter} from "react-router-dom";
import App from './App/App';
import './index.css';

import initializeFakeBackend from './Helpers/fakebackend';

initializeFakeBackend();

import news from './news';
import storeFactory from "./Store/store";

const store = storeFactory({news: news});

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
