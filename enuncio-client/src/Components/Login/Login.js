import React, { useState } from 'react';

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (evt) => {
        if(evt.target.name === 'username') {
            setUsername(evt.target.value);
        }
        if(evt.target.name === 'password') {
            setPassword(evt.target.value);
        }
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(username + ' ' + password);
    }

    return (<div>
        <h3>Welcome Back!</h3>
        <form onSubmit={handleSubmit}>
            <input name='username' placeholder='User Name' value={username} onChange={handleChange} /><br />
            <input name='password' placeholder='Password' value={password} onChange={handleChange} type='password' /><br />
            <button>Login</button>
        </form>
        <p>New User? <a href='Signup'>Signup Here</a></p>
    </div>);
}

export default Login;