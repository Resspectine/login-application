import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {logout} from '../../Store/actions/actions';

const LoginButton = ({loggedIn, history, logOut, location}) =>
    <button className={loggedIn ? 'button active' : 'button'}
            onClick={
                loggedIn ?
                    () => logOut() :
                    () => {
                        if (location.pathname !== '/login')
                            history.push('/login')
                    }
            }>
        {loggedIn ? 'Выйти' : 'Войти'}
    </button>;

export default connect(
    store => ({
        loggedIn: store.user.loggedIn
    }),
    dispatch => ({
        logOut() {
            dispatch(logout());
        }
    })
)(withRouter(LoginButton));
