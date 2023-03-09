import React from 'react'
import Post from '../Post/Post'
const Feed = ({ posts }) => {
    return (
        <>
            {
                posts.map((post, idx)=> (
                    <Post key={post.id} post={post} idx={idx}/>
                ))
            }
        </>
    )
}
export default Feed