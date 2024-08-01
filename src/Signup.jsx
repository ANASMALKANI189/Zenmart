import React, { useState } from 'react';
import './signup.css'; // Import your CSS file for styling (adjust the path as needed)

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  // const [error, setError] = useState('');
  function handleonClick(){
    <div className="form-section">
          <p>Your account has been created.</p>
          <p>Already have an Account? <a href="/">Log in</a></p>
        </div>
  }
  const handleSignup = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please enter all details.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/signup', { // Update with your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const message = await response.text();
        alert(message); // Display success message
        setIsAccountCreated(true);
      } else {
        const errorMessage = await response.text();
        // setError(errorMessage);
      }
    } catch (error) {
      console.log('Error during signup:', error);
      // setError('An error occurred while creating your account.');
    }
  };

  return (
    <div className='sgn'>
    <div className="form-box">
      {!isAccountCreated ? (
        <form className="form" onSubmit={handleSignup}>
          <span className="title">Sign up</span>
          <span className="subtitle">Create a free account with your email.</span>
          <div className="form-container">
            <input
              type="text"
              className="ip7"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
             <br/>
            <input
              type="email"
              className="ip7"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
             <br/>
            <input
              type="password"
              className="ip7"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
             <br/>
          </div>
          <button type="submit" onClick={handleonClick}>Sign up</button>
        </form>
      ) : (
        <div className="form-section">
          <p>Your account has been created.</p>
          <a href="/">Log in</a>
        </div>
      )}
    </div>
    </div>
  );
};

export default SignupForm;
