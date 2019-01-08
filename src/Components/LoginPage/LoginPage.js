import React from 'react';
import {connect} from 'react-redux';
import './style.css';
import {loginUser} from "../../Store/actions/actions";

const LoginPage = ({loggingFailed, loggingIn, handleSubmit, history}) => {
    let name;
    let password;

    const submit = e => {
        e.preventDefault();
        handleSubmit({name: name.value, password: password.value}, history);
        name.value = '';
        password.value = '';
    };

    return (
        <div>
            <form className='login-form' onSubmit={submit}>
                <input ref={input => name = input} type="text"/>
                <input ref={input => password = input} type="password"/>
                <button>SEND</button>
                {loggingIn && <p>Waiting for response</p>}
                {loggingFailed && <p>Error: {loggingFailed}</p>}
            </form>
        </div>
    )
};

export default connect(
    store => {
        const {name, loggingFailed, loggingIn} = store.user;
        return {
            user: name,
            loggingFailed,
            loggingIn,
        };
    },
    dispatch => ({
        handleSubmit(user, history) {
            dispatch(loginUser({...user}, history));
        }
    })
)(LoginPage);
