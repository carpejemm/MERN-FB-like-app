import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => (
  <div className='comments-item'>
    <div className='comment-avatar'>
      <Link to={`/profile/${user}`}>
        <img src={avatar} alt='' width='50' />
      </Link>
    </div>
    <div className='comment-text'>
      <Link to={`/profile/${user}`}>
        <span className='comment-username'>{name}</span>
      </Link>
      {text}
      {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deleteComment(postId, _id)}
          type='button'
          className='delete-btn'
        >
          <i className='fas fa-times' />
        </button>
      )}
      <p className='moment'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
