import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='signup-box'>
        <h1>Sign Up</h1>
        <p>
          <i className='fas fa-user'></i> Create Your Account. It’s quick and
          easy.
        </p>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={onChange}
              // required
            />
          </div>
          <div>
            <input
              type='password'
              placeholder='Password'
              name='password'
              minLength='8'
              value={password}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              minLength='6'
              value={password2}
              onChange={onChange}
            />
          </div>
          <input type='submit' value='Register' />
        </form>
        <p>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
