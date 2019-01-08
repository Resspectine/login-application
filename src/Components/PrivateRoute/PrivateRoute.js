import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, ...rest, loggedIn}) => {
    return <Route {...rest} render={(props) => {
        return loggedIn ? <Component {...props} /> : <Redirect to='/login'/>
    }}>
    </Route>
};

export default connect(
    store => ({
        loggedIn: store.user.loggedIn
    })
)(PrivateRoute);
