import React from 'react';
import {connect} from 'react-redux';
import './style.css';
import {loginUser, releaseError, setError} from "../../Store/actions/actions";
import ErrorMessages from '../ErrorMessage/ErrorMessage';

const LoginPage = ({error, loggingIn, handleSubmit, history, invalidEmail, globalError, clearError}) => {
    let email;
    let password;

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };

    const submit = e => {
        e.preventDefault();
        clearError();
        if(validateEmail(email.value)){
            handleSubmit({name: email.value, password: password.value}, history);
            password.value = '';
        } else {
            invalidEmail('invalid_email');
        }
    };

    return (
        <div>
            <form className='login-form' onSubmit={submit}>
                <input ref={input => email = input} type="email"/>
                <input ref={input => password = input} type="password"/>
                <button disabled={loggingIn}>Отправить</button>
                {loggingIn && <p>Ожидание ответа...</p>}
                {error && <ErrorMessages messages={error}/>}
                {globalError && <ErrorMessages messages={globalError}/>}
            </form>
        </div>
    )
};

export default connect(
    store => {
        return {
            error: store.user.error,
            loggingIn: store.user.loggingIn,
            globalError: store.error,
        };
    },
    dispatch => ({
        handleSubmit(user, history) {
            dispatch(loginUser({...user}, history));
        },
        invalidEmail(message) {
            dispatch(setError(message));
        },
        clearError(message) {
            dispatch(releaseError(message));
        }
    })
)(LoginPage);
