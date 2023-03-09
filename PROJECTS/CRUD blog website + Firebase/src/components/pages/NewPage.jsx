import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NewPage = ({
    handleSubmit,
    postTitle,
    setPostTitle,
    postBody,
    setPostBody,
    errorMessage,
    loader,
    setErrorMessage
}) => {

    useEffect(() => {
        if (errorMessage) {
            toast(errorMessage);
            setErrorMessage('')
        }
    }, [errorMessage]);

    return (
        <main className='max-w-sm mx-auto text-left mt-10'>
            <h2 className='font-semibold text-2xl'>New Post</h2>
            <form className="newPostForm">
                <label htmlFor="postTile">Title:</label>
                <input type="text"
                    id='postTitle'
                    required
                    autoComplete='off'
                    value={postTitle}
                    onChange={e => setPostTitle(e.target.value)} />
                <label htmlFor="postBody">Post:</label>
                <textarea type="text"
                    id='postBody'
                    autoComplete='off'
                    required
                    cols="2"
                    value={postBody}
                    onChange={e => setPostBody(e.target.value)} ></textarea>
                <button type='submit' onClick={handleSubmit} className="bg-gradient-to-r w-32 h-auto block from-indigo-700 to-indigo-500">
                    {loader ? 'Submiting...' : 'Submit'}
                </button>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        </main>
    )
}

export default NewPage