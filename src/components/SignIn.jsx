import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Toggle password visibility
  const [error, setError] = useState(''); // Error state
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent default form behavior

    // Simulate sign-in with hardcoded valid credentials
    if (email === 'user@example.com' && password === 'password123') {
      setError(''); // Clear error if sign-in is successful
      navigate('/portfolio', { state: { email: email } }); // Redirect to portfolio with state
    } else {
      setError('Invalid email or password'); // Set error message on invalid credentials
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#f5f5f5' }}>
      <div className="card shadow" style={{ width: '350px', padding: '30px', borderRadius: '10px', backgroundColor: '#ffffff' }}>
        <h2 className="text-center" style={{ color: '#333', fontWeight: 'bold' }}>Sign In</h2> {/* Styled heading */}
        <form onSubmit={handleSignIn}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ color: '#555' }}>Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3" style={{ position: 'relative' }}>
            <label htmlFor="password" className="form-label" style={{ color: '#555' }}>Password:</label>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon
              icon={isPasswordVisible ? faEyeSlash : faEye}
              style={{ position: 'absolute', right: '10px', top: '35px', cursor: 'pointer' }}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          </div>
          {error && <div className="text-danger mb-3">{error}</div>} {/* Display error if present */}
          <button type="submit" className="btn btn-primary w-100">Sign In</button> {/* Sign-in button */}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
