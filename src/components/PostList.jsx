import React from 'react'

import PostItem from './PostItem.jsx'

function PostList({posts, title, remove}) {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map( (post, i) => 
      <PostItem remove={remove} post={post} nr={i + 1} key={post.id} />
      )}
    </div>
    )
}

export default PostList
