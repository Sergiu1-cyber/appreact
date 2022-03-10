import React, {useState} from 'react'

import MyButton from './UI/button/MyButton.jsx'
import MyInput from './UI/input/MyInput.jsx'

const PostForm = ({create}) => {
    
  const [post, setPost] = useState({title: '', body: ''})
    
  function addPost(e) {
    e.preventDefault()
    
    const newPost = {
      ...post,
      id: Date.now()
    }
    create(newPost)
    
    setPost({title: '', body: ''})
  }

  return (
    <form>
    
      <MyInput 
        value={post.title} 
        onChange={e => setPost({...post, title: e.target.value})} 
        type='text' 
        placesholder='title' />
        
      <MyInput 
        value={post.body} 
        onChange={e => setPost({...post, body: e.target.value})} 
        type='text' 
        placesholder='body' />
        
      <MyButton onClick={addPost} >Exped</MyButton>
      </form>
    )
}

export default PostForm