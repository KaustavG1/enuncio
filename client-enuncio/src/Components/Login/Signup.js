import React, { useState } from 'react';

function Signup(props) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (evt) => {
        if(evt.target.name === 'email') {
            setEmail(evt.target.value);
        }
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
        <h3>SignUp Today!</h3>
        <form onSubmit={handleSubmit}>
            <input name='email' placeholder='Email' value={email} onChange={handleChange} type='email' /><br />
            <input name='username' placeholder='User Name' value={username} onChange={handleChange} type='text' /><br />
            <input name='password' placeholder='Password' value={password} onChange={handleChange} type='password' /><br />
            <button>Sign Up</button>
        </form>
        <p>Existing User? <a href='Login'>Login Here</a></p>
    </div>);
}

export default Signup;