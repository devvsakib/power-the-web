import { React, useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import PostPage from './components/pages/PostPage'
import Editpost from './components/Post/Editpost'
import NewPage from './components/pages/NewPage'
import Missing from './components/pages/Missing'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import Nav from './components/Header/Nav'
import Doc from './components/pages/Doc'
import format from 'date-fns/format'
import api from './API/posts'
import './App.css'

const App = () => {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [loader, setLoader] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editBody, setEditBody] = useState('')
  const history = useNavigate()


  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.get('/');
        setPosts(res.data)
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err.message);
        }
      }
    }
    fetchPost()
  }, [])
  useEffect(() => {
    const filteredResults = posts.filter(post =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));
    setSearchResult(filteredResults.reverse());
  }, [posts, editTitle, search])

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const editedPost = {
      id,
      title: editTitle,
      datetime: datetime,
      body: editBody
    }
    try {
      await api.patch(`/${id}`, editedPost);
      const allPosts = posts.map(post => post.id === id ? editedPost : post)
      setPosts(allPosts)
      setEditTitle('');
      setEditBody('');
      history(`/postpage/${id}`)
    }
    catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody
    }
    try {
      setLoader(true)
      const response = await api.post('/', newPost)
      const allPosts = [...posts, response.data]
      if (response.status === 201) return console.log('No data');
      setPosts(allPosts)
      setPostTitle('')
      setPostBody('')
      history('/')

    } catch (err) {
      setErrorMessage(err.message)
      console.log(err.message);
    }
    finally {
      setLoader(false)
    }
  }
  const handleDelete = async (id) => {
    try {
      await api.delete(`/${id}`);
      setPosts(posts.filter(post => post.id !== id));
      history(`/`)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route
          path=''
          element={<Home
            posts={searchResult}
          />} />
        <Route
          path='newpost'
          element={<NewPage
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            loader={loader}
          />} />
        <Route path='edit/:id' element={<Editpost
          handleEdit={handleEdit}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          editBody={editBody}
          setEditBody={setEditBody}
          posts={posts}
        />} />
        <Route path='postpage/:id' element={<PostPage
          posts={posts}
          handleDelete={handleDelete}
        />} />
        <Route path='doc' element={<Doc />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Missing />} />
      </Routes>
    </>
  )
}

export default App