import React, { useState } from 'react';

const SignUpPage = () => {
  // Set up state variables for the sign up form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  
  // Function to handle sign up form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate the form
    if (!name || !email || !password || !passwordConfirm) {
      setError('Please enter a valid name, email, and password');
      return;
    }
    if (password !== passwordConfirm) {
      setError('Passwords do not match');
      return;
    }
    
    // Send a request to the server to create the user account
    fetch('/signup', {
      method: 'POST',
      headers: {
