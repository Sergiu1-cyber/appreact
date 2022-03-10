import React from 'react'

import MyButton from './UI/button/MyButton.jsx'

function Post(props) {
  
  return (
    <div className="post">
      <div className="post__content">
      <strong>{props.nr}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.post) }>Sterg</MyButton>
      </div>
    </div>
  )
}

export default Post
