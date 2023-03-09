import React from 'react'
import "../../App.css";
import Feed from './Feed';
const HomeProj = ({ posts }) => {
    return (
        <main className="Home flex flex-wrap flex-row justify-center">
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display or server offline
                </p>
            )}
        </main>
    )
}

export default HomeProj