import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <div className='comment-input'>
          <div className='comment-avatar'>
            <img
              height='32'
              src='https://cdn.onlinewebfonts.com/svg/img_568656.png'
              width='32'
              alt='avatar'
            />
          </div>
          <div className='comment-input-area'>
            <textarea
              className='textarea'
              name='text'
              placeholder='Write your comment'
              value={text}
              onChange={e => setText(e.target.value)}
              required
            ></textarea>
            <div className='input-action clearfix'>
              <input type='submit' value='POST COMMENT' className='send-btn' />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
