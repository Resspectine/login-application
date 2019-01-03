import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';
import {Provider} from 'react-redux';
import storeFactory from "./Store";
import {HashRouter} from "react-router-dom";
import news from './news';
import {loginUser} from "./Store/actions";

const store = storeFactory({news: news});
store.dispatch(loginUser({name:'das'}));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
