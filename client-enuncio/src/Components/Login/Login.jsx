import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (evt) => {
    if (evt.target.name === 'username') {
      setUsername(evt.target.value);
    }
    if (evt.target.name === 'password') {
      setPassword(evt.target.value);
    }
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    // console.log(`${username} ${password}`);
  }

  return (
    <div className="login">
      <h3>Welcome Back!</h3>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="User Name" value={username} onChange={handleChange} />
        <br />
        <input name="password" placeholder="Password" value={password} onChange={handleChange} type="password" />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        New User?
        <Link to="/signup">Signup Here</Link>
      </p>
    </div>
  );
}

export default Login;
