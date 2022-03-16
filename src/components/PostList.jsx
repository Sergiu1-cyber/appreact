import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import PostItem from './PostItem.jsx'

function PostList({posts, title, remove}) {
  
  if (!posts.length) {
    return (
      <h1 style={{textAlign: 'center'}}>Lista Goala</h1>
      )
  }
  
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      <TransitionGroup>
        {posts.map( (post, i) => 
        <CSSTransition
          key={post.id}
          timeout={500}
          classNames="post"
          >
            <PostItem remove={remove} post={post} nr={i + 1} />
          </CSSTransition>
          )}
        </TransitionGroup>
    </div>
    )
}

export default PostList
