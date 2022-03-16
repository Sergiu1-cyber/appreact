import React, {useState, useEffect} from 'react'

import {usePosts} from './hooks/usePosts'
import {useFetching} from './hooks/useFetching'
import PostService from './API/PostService'

import './styles/App.css'
import PostList from './components/PostList.jsx'
import PostForm from './components/PostForm.jsx'
import PostFilter from './components/PostFilter.jsx'

import MyModal from './components/UI/modal/MyModal.jsx'
import MyButton from './components/UI/button/MyButton.jsx'
import Loader from './components/UI/loader/Loader.jsx'

function App() {
  // Store
  const[posts, setPosts] = useState([])
  const[modal, setModal] = useState(false)
  const[filter, setFilter] = useState({sort: '', query: ''})
  const[fetchPosts, isLoaging, postError] = useFetching( async () => {
    const response = await PostService.getAll()
    setPosts(response.data)
    } )
  const sortedAndShearhedPosts = usePosts(posts, filter.sort, filter.query)
    
  useEffect( () => {
    fetchPosts()
  }, [])
    
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(
      p => p.id !== post.id
      ))
  }
  
  return (
    <div className="App">
      <MyButton
        style={{marginTop: '30px'}}
        onClick={() => setModal(true)}
        >
          Creez Post
        </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}
        >
          <PostForm create={createPost} />
        </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
        />
      {postError && 
        <h1>Error: ${postError}</h1>
      }
      {
        isLoaging
          ? <div
              style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
              <Loader />
              </div>
          : <PostList remove={removePost} 
              posts={sortedAndShearhedPosts} 
              title={'Lista posturilor 1'}/>
      }
    </div>
  );
}

export default App;
