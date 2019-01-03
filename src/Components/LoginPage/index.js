import React from 'react';
import './style.css';

const LoginPage = () => {
    let name;
    let password;
    const submit = e => {
        e.preventDefault();
        console.log(name.value);
        console.log(password.value);
        name.value = '';
        password.value = '';
    };
    return (<form className='login-form' onSubmit={submit}>
        <input ref={input => name = input} type="text"/>
        <input ref={input => password = input} type="password"/>
        <button>SEND</button>
    </form>)
};

export default LoginPage;
