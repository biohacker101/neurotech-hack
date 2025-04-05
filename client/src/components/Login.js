import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    // For demo purposes, accept any email/password
    onLogin();
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <div className="logo-circle">
            <div className="logo-wave"></div>
            <div className="logo-play"></div>
          </div>
          <h1 className="logo-text">FocusFlow</h1>
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login; 