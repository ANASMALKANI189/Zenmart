import { useState } from 'react';
// import axios from 'axios';
import './signup.css'; // Import your CSS file

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', { // Update with your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email,password }),
      });

      if (response.ok) {
        const message = await response.text();
        alert(message); // Display success message
        setIsLoggedIn(true);
      } 
      // else {
      //   const errorMessage = await response.text();
      //   // setError(errorMessage);
      // }
    } catch (error) {
      console.log('Error during login:', error);
      // setError('An error occurred while creating your account.');
    }
  };

  return (
    <div className='sgn'>
    <div className="form-box">
      {!isLoggedIn ? (
        <form className="form" onSubmit={handleLogin}>
          <p id="heading">Login</p>
          <div className="form-container">
            <input
              placeholder="Email"
              className="ip7"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <input
              placeholder="Password"
              className="ip7"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
             <br/>
          </div>
          <div className="btn">
            <button className="button1" type="submit">Login</button>
          </div>
          <button className="button3">Forgot Password</button>
          <div className="form-section">
            <p>Don't have an Account? <a href="/signup">Sign up</a></p>
          </div>
        </form>
      ) : (
        <div className="form-section">
          <a href="/Home"><p>Go to Home Page</p></a>
        </div>
      )}
    </div>
    </div>
  );
};

export default LoginForm;
