import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    return (
        <main className='PostPage text-center'>
            <article className='post'>
                {post &&
                    <>
                        <h2 className="text-center">{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <Link to={`/edit/${post.id}`} className="editButton">Edit Post</Link>
                        <button
                            onClick={() => handleDelete(post.id)}
                            className="deleteButton"
                        >
                            Delete Post
                        </button>
                    </>
                }{
                    !post
                    &&
                    <>
                        <h2>Not Found</h2>

                        <Link
                            to={'/'}>
                            Go Back
                        </Link>
                    </>
                }
            </article >
        </main >

    )
}

export default PostPage