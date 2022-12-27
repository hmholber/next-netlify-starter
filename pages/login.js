import React, { useState } from 'react';

const LoginPage = () => {
  // Set up state variables for the login form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Function to handle login form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate the form
    if (!email || !password) {
      setError('Please enter a valid email and password');
      return;
    }
    
    // Send a request to the server to log the user in
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          // Redirect the user to the dashboard page
          window.location.href = '/dashboard';
        }
      });
  };
  
  return (
    <div className="login-page">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
