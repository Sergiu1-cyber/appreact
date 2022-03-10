import React, {useState} from 'react'

import './styles/App.css'
import PostList from './components/PostList.jsx'
import PostForm from './components/PostForm.jsx'


function App() {
  
  const[posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Post nr 1'},
    {id: 2, title: 'Javascript', body: 'Post nr 2'},
    {id: 3, title: 'Javascript', body: 'Post nr 3'}
    ])
    
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(
      p => p.id !== post.id
      ))
  }
 
  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title={'Lista posturilor 1'} />
    </div>
  );
}

export default App;
