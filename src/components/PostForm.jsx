import React, {useState} from 'react'

import MyButton from './UI/button/MyButton.jsx'
import MyInput from './UI/input/MyInput.jsx'

const PostForm = ({create}) => {
    
  const [post, setPost] = useState({title: '', body: ''})
    
  function addPost(e) {
    e.preventDefault()
    if (post.title !== '' && post.body !== '') {
      const newPost = {
        ...post,
        id: Date.now()
        }
      create(newPost)
      setPost({title: '', body: ''})
      }
  }

  return (
    <form style={{marginTop: '30px'}}>
    
      <MyInput 
        value={post.title} 
        onChange={e => setPost({...post, title: e.target.value})} 
        type='text' 
        placeholder='title' />
        
      <MyInput 
        value={post.body} 
        onChange={e => setPost({...post, body: e.target.value})} 
        type='text' 
        placeholder='body' />
        
      <MyButton onClick={addPost} >Creez</MyButton>
      </form>
    )
}

export default PostForm