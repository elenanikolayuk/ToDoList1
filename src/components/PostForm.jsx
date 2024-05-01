import React from "react";
import { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: ''});

    const handleInput = (e) => {
        setPost ({...post, title: e.target.value})
        }
        
    const handleAddItem = (e) => {
        e.preventDefault()
        const newItem = {
            ...post,
          id: Date.now(),
          
        }
       create(newItem)
       setPost({title: ''})
      }
      
    return (
        <form>
        
        <MyInput 
        value={post.title}
        onChange={handleInput}
        type='text'
        placeholder=' What is the taste today?'
        />
        <MyButton onClick={handleAddItem}>Add task</MyButton>
      </form>
    );
};

export default PostForm;