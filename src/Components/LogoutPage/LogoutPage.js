import React from 'react';
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
import {logout} from "../../Store/actions/actions";

const LogoutPage = ({logout}) => {
    logout();
    return <Redirect to='/'/>
};

export default connect(null,
    dispatch => ({
        logout() {
            dispatch(logout());
        }
    })
)(LogoutPage);
