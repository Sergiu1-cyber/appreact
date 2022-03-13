import React, {useState} from 'react'

import './styles/App.css'
import PostList from './components/PostList.jsx'
import PostForm from './components/PostForm.jsx'
import MySelect from './components/UI/select/MySelect.jsx'


function App() {
  
  const[posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Post nr 1'},
    {id: 2, title: 'React', body: 'Al doilea post'},
    {id: 3, title: 'Vue', body: 'Trei'}
    ])
    
  const[selSort, setSelSort] = useState('')
    
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(
      p => p.id !== post.id
      ))
  }
  
  const sortPosts = (sort) => {
    setSelSort(sort)
    setPosts([...posts].sort(
        (a, b) => a[sort].localeCompare(b[sort])
      ))
  }
 
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0'}} />
      <div>
        <MySelect 
          value={selSort}
          onChange={sortPosts}
          defVal="sortez"
          options={[
          {value: 'title', name: 'nume'},
          {value: 'body', name: 'text'}
          ]}
        />
      </div>
      { posts.length !==0 
        ? <PostList remove={removePost} posts={posts} title={'Lista posturilor 1'} />
        : <h1 style={{textAlign: 'center'}}>Lista Goala</h1> }
    </div>
  );
}

export default App;
