import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, remove}) => {
    return (
        <div>
            
            {posts.map(post => 
               <PostItem remove={remove} post={post} key={post.id}/>)}
        </div>
    )
}

export default PostList;