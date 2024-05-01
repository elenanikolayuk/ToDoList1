import React from 'react';

const PostItem = (props) => {
    return (
        <div className='post_content'>
              <div className='post_text'>
                <p> {props.post.title} </p>
              </div>
              <div className='post_btn'>
                <button>Edit</button>
                <button>Delete</button>
              </div>
        </div>
    )

}

export default PostItem;