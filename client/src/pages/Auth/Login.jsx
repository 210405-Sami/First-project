import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log('login==> ', email, password);
      toast.success('Login successful');
      setEmail('');
      setPassword('');
      navigate("/profile"); 
    } catch (error) {
      console.log(error);
      toast.error('Login failed');
    }
  };

  return (
    <>
      <div className="auth-container">
        <div className="card">
          <h2>Login to Your Account</h2>
          <p>Please enter your credentials to continue</p>

          <div className="form-group mb-3">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="btn btn-primary"
            disabled={!email || !password}
            onClick={handleSubmit}
          >
            LOGIN
          </button>

          <p className="mt-3">
            Don’t have an account?{' '}
            <NavLink to="/register">Register here!</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
