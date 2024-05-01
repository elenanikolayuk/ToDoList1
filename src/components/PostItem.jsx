import React from 'react';
import './UI/button/img/edit.png';
import './UI/button/img/delete.png';

const PostItem = (props) => {
    return (
        <div className='post_content'>
              <div className='post_text'>
                <p> {props.post.title} </p>
              </div>
              <div className='post_btn'>
                <button ><img height='12px' src={require('./UI/button/img/edit.png')} alt='edit' /></button>
                <button ><img height='12px' src={require('./UI/button/img/delete.png')} alt='delete' /></button>
                
          
              
              </div>
        </div>
    )

}

export default PostItem;