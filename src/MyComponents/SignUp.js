import React, { useState } from 'react';
import axios from 'axios';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [userType, setUserType] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSpecialityChange = (event) => {
    setSpeciality(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Simulate an API call using axios.post
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.post('${apiUrl}/register/', {
        name,
        number,
        email,
        password,
        speciality,
        gender,
        country,
        userType,
      });

      console.log('API Response:', response.data);

      // Clear form fields after successful submission
      setName('');
      setNumber('');
      setEmail('');
      setPassword('');
      setSpeciality('');
      setGender('');
      setCountry('');
      setUserType('');

      // Redirect or show a success message as needed
    } catch (error) {
      console.error('Error making API call:', error);
      // Handle error scenarios here
    }
  };

  return (
    <div className="assign">
      <u>
        <h1 className="header">Create New Account</h1>
      </u>
      <form onSubmit={handleSubmit}>
      <br></br>
      <div className="sign-body">
        
      </div>
        <label>
          <input className='Input' type="text" placeholder='Enter your name' id='SignUpName' value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          <input className='Input' type="email" placeholder='Enter your e-mail' id='SignUpEmail' value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          <input className='Input' type="text" placeholder='Enter your phone number' id='SignUpNUMBER' value={Number} onChange={handleNumberChange} />
        </label>
        <br />
        <label>
          <input className='Input' type="password" placeholder='Enter your password'id='SignUpPAss2' value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <label>
          <input className='Input' type="password" placeholder='Enter password again' id='SignUpPAssAgain' value={password} onChange={handlePasswordChange} />
        </label>
         
        <br />
<label className='select-text'>Gender:</label>
<input
  className='checkB'
  type='checkbox'
  id='male'
  checked={gender === 'male'}
  onChange={() => setGender('male')}
/>
<label className='select-text'>Male&emsp;&emsp;</label>
<input
  className='checkB'
  type='checkbox'
  id='female'
  checked={gender === 'female'}
  onChange={() => setGender('female')}
/>
<label className='select-text'>Female</label>
<br />

<label className='select-text'>Select country:</label>
<select
  className='select-box'
  name="countries"
  id="country"
  value={country}
  onChange={(e) => setCountry(e.target.value)}
>
  <option value="" disabled></option>
  <option value="Egypt">Egypt</option>
  <option value="Palestine">Palestine</option>
</select>
<br />

<label className='select-text'>Sign As:</label>
<select
  className='select-box'
  name="character"
  id="character"
  value={userType}
  onChange={(e) => setUserType(e.target.value)}
>
  <option value="" disabled></option>
  <option value="Doctor">Doctor</option>
  <option value="Patient">Patient</option>
</select>
        
        <button className="Sign-button" type="submit">
          <a href="/SignInPage">Login</a>
        </button>
        <button className="Sign-button" type="submit">
          <a href="/">Sign Up</a>
        </button>
      </form>
    </div>
  );
};

export default SignUpPage
