import React, { useState } from 'react';
import axios from 'axios';

const SignInPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  
  try {
    const apiUrl = process.env.REACT_APP_API_URL;
    const response = axios.post('${apiUrl}/register/', {
      name,
      email,
      password,
    });

    console.log('API Response:', response.data);

    // Clear form fields after successful submission
    setName('');
    setEmail('');
    setPassword('');

    // Redirect or show a success message as needed
  } catch (error) {
    console.error('Error making API call:', error);
    // Handle error scenarios here
  }

  return (
    <div className="assign">
      <u><h1 className='header'><i>Sign In</i></h1></u>
      <form onSubmit={handleSubmit}>
        <br></br>
        <div className="sign-body">
        </div>
        <label>
          <input
            className='Input'
            type="text"
            placeholder='Enter your name'
            id='loginName'
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          <input
            className='Input'
            type="email"
            placeholder='Enter your e-mail'
            id='loginEmail'
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <label>
          <input
            className='Input'
            type="password"
            placeholder='Enter your password'
            id='loginPass'
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button className='Sign-button' type="button" onClick={handleSubmit}><a href='/'>login</a></button>
        <button className='Sign-button' type="submit"><a href='/SignUpPage'>Create Account</a></button>
      </form>
    </div>
  );
};

export default SignInPage;
