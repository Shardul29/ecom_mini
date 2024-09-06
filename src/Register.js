import React, { useState } from 'react';


const Register = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function signUp() {
    // Check if states have the correct values
    console.warn("Sign-Up button clicked");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <div className='col-sm-6 offset-sm-3'>
      <h1>Register</h1>
      <input
        type='text'
        value={name}
        onChange={(e) => {
          console.log("Name input changed:", e.target.value); // Debugging line
          setName(e.target.value);
        }}
        className='form-control'
        placeholder='Name'
      />
      <br />
      <input
        type='text'
        value={email}  // Added value to ensure controlled input
        onChange={(e) => {
          console.log("Email input changed:", e.target.value); // Debugging line
          setEmail(e.target.value);
        }} className='form-control'
        placeholder='Email'
      />
      <br />
      <input
        type='password'  // Correct input type for password
        value={password}  // Added value to ensure controlled input
        onChange={(e) => {
          console.log("Email input changed:", e.target.value); // Debugging line
          setPassword(e.target.value);
        }} className='form-control'
        placeholder='Password'
      />
      <br />

      <button type="button" onClick={signUp}>Sign-Up</button>
    </div>
  );
}

export default Register;
