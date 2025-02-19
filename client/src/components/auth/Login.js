import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='login-box'>
      <h2 className='title'>LOG IN</h2>
      <p> Sign Into Your Account</p>
      <form className='form' onSubmit={onSubmit}>
        <div className='input-field'>
          <i className='fas fa-user'></i>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='input-field'>
          <i className='fas fa-lock'></i>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
            minLength='8'
          />
        </div>
        <input type='submit' className='btn solid' value='Login' />
      </form>
      <p>
        Don't have an account?{' '}
        <Link to='/register' className='link'>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
