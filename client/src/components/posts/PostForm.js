import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <div className='contentContainer'>
      <form
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
        <div className='contant'>
          <div className='box'>
            <h2>POST SOMETHING</h2>
            <textarea
              cols='30'
              rows='5'
              className='messageBox'
              placeholder="What's on your mind?"
              name='text'
              value={text}
              onChange={e => setText(e.target.value)}
              required
            ></textarea>
            <input type='submit' value='POST' className='postButton' />
          </div>
        </div>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
