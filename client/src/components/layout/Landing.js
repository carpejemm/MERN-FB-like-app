import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='landing-height'>
        <div className='landing-inner'>
          <h1 className='x-large'>THE NETWORK</h1>
          <p className='landing-desc'>
            Connect with professionals and the world around you
          </p>
          <div>
            <Link to='/register' className='buttons bgdark'>
              SIGN UP FOR FREE
            </Link>
            <Link to='/login' className='buttons bgnone'>
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
