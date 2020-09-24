import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => (
  <div className='post-item'>
    <div className='post'>
      <div className='main'>
        <div className='pic'>
          <img src={avatar} alt='' width='50' />
        </div>
        <div className='details'>
          <Link to={`/profile/${user}`}>
            <div className='name post-username'>{name}</div>
          </Link>
          <div className='time'>
            Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
          </div>
        </div>
        <div className='clear'></div>

        <div className='content'>{text}</div>
        <div className='likes'>
          {likes.length > 0 && <div>{likes.length} likes</div>}
        </div>
        <span className='likes'>
          {comments.length > 0 && <span>{comments.length} comments</span>}
        </span>
      </div>
      {showActions && (
        <Fragment>
          <div className='buttons'>
            <div className='border-right'>
              <div onClick={() => addLike(_id)} className='like'>
                Like
              </div>
            </div>
            <div className='border-right'>
              <div onClick={() => removeLike(_id)} className='unlike'>
                Unlike
              </div>
            </div>
            <div>
              <Link to={`/posts/${_id}`} className='comment comment-button'>
                Comment
              </Link>
            </div>

            <div>
              <div className='clear'></div>
            </div>

            {!auth.loading && user === auth.user._id && (
              <button onClick={() => deletePost(_id)} type='button'>
                <i className='fas fa-times' />
              </button>
            )}
          </div>
        </Fragment>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
