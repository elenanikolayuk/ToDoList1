import React from 'react';
import './UI/button/img/edit.png';
import './UI/button/img/delete.png';
import { useState } from 'react';

const PostItem = (props) => {
const [done, setDone] = useState('none');

const handleClick = () => {
  setDone(
    done === 'none' ? 'line-through' : 'line-through'
    );
}

const style = {
  textDecoration: done
}

    return (
        <div className='post_content'>
              <div className='post_text'>
                <p onClick={handleClick} style={style}> {props.post.title} </p>
              </div>
              <div className='post_btn'>
                <button >
                      <img height='12px' src={require('./UI/button/img/edit.png')} alt='edit' />
                </button>
                <button onClick={() => props.remove(props.post)}>
                       <img height='12px' src={require('./UI/button/img/delete.png')} alt='delete' />
                </button>
                
          
              
              </div>
        </div>
    )

}

export default PostItem;