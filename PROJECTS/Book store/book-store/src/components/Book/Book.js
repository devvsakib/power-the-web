import React from 'react';
import {Button}from '@mui/material';
import "./Book.css"
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios"

const Book = (props) => {
  const history=useNavigate()
    const{_id,name,author,description,price,image}=props.book;
  function refreshPage() {
    window.location.reload(false);
  }
    const deleteHandler=async()=>{
    await axios.delete(`http://localhost:5000/books/${_id}`)
    .then(res=>res.data)
    .then(refreshPage())
    .then(()=>history("/books"))
    

  };
    
  return (
    <div className='card'>
    <img className='image' src={image} alt={name}/>
    <article>By {author}</article>
    <h3>{name}</h3>
    <p>{description}</p>
    <h3>Rs:{price}</h3>
    <Button variant="outlined" LinkComponent={Link} to={`/books/${_id}`} sx={{m:"auto"}}>Update</Button>
    <Button variant="outlined" onClick={deleteHandler} sx={{m:"auto"}}>Delete</Button>
  </div>
  )

}

export default Book;