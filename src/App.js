import React, { useState } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';



function App() {
const [posts, setPosts] = useState([])

const createPost = (newItem) => {
setPosts ([...posts, newItem])
}

const removePost = (post) => {
setPosts(posts.filter(p => p.id !== post.id))
}

  return (
    <div className="App">
        <div className='App-ToDo'>
            <h1>Get things done!</h1>

            <PostForm create={createPost}/>
            <PostList remove={removePost} posts={posts}/>
          
        
        </div>

    </div>
  );
}

export default App;
