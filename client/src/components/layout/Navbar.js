import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Discover members</Link>
      </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' /> <span>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' /> <span>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/register' className='bgnone'>
          SIGN UP
        </Link>
      </li>
      <li>
        <Link to='/login' className='buttons bgdark'>
          LOG IN
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar'>
      <h1>
        <Link to='/'>
          <i className='fas fa-user-friends'></i> THE NETWORK
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
