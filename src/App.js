import React, { useState } from 'react';
import './App.css';

import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';


function App() {
const [posts, setPosts] = useState([])
const [title, setTitle] = useState('');

const handleInput = (e) => {
setTitle (e.target.value)
}

const handleAddItem = (e) => {
  e.preventDefault()
  const newItem = {
    id: Date.now(),
    title
  }
 setPosts([...posts, newItem])
 setTitle('')
}


  return (
    <div className="App">
        <div className='App-ToDo'>
            <h1>Get things done!</h1>

                <form>
                  <MyInput 
                  value={title}
                  onChange={handleInput}
                  type='text'
                  placeholder=' What is the taste today?'
                  />
                  <MyButton onClick={handleAddItem}>Add task</MyButton>
                </form>
            <PostList posts={posts}/>
          
        
        </div>

    </div>
  );
}

export default App;
