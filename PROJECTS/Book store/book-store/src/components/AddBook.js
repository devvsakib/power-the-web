import { FormLabel, TextField,Box, Button,FormControlLabel,Checkbox } from '@mui/material'
import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AddBook = () => {
  const history=useNavigate();
  const [input, setinput] = useState({
    name:"",
    description:"",
    price:"",
    author:"",
    available:"",
    image:""
  });

  const [checked, setchecked] = useState(false);

  const handleChange=(event)=>{
    setinput((prevState)=>({
      ...prevState,[event.target.name]:event.target.value
    }))
  };

  const sendRequest=async()=>{
    await axios.post("http://localhost:5000/books",{
      name:String(input.name),
      author:String(input.author),
      description:String(input.description),
      price:Number(input.price),
      available:Boolean(checked),
      image:String(input.image)

    }).then(res=>res.data);
  }



const handleSubmit=(event)=>{
event.preventDefault();
console.log(input,checked);
sendRequest()
.then(()=>history("/books"))}


  return (
    <div className='form'>
        <h1>Add Products</h1>
         <form onSubmit={handleSubmit}>
          <Box 
          display="flex" 
          flexDirection="column" 
          justifyContent={'center'} 
          maxWidth={700} 
          alignContent={"center"} 
          alignSelf={"center"}
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={5}
          >
          <FormLabel>Name</FormLabel>
          <TextField 
          value={input.name}
          onChange={handleChange}
          margin="normal" 
          fullWidth variant='outlined' 
          name='name'
          />
          <FormLabel>Author</FormLabel>
          <TextField 
          value={input.author}
          onChange={handleChange}
          margin="normal" 
          fullWidth variant='outlined' 
          name='author'
          />
          <FormLabel>Description</FormLabel>
          <TextField 
          value={input.description}
          onChange={handleChange}
          margin="normal" 
          fullWidth variant='outlined' 
          name='description'
          />
          <FormLabel>Price</FormLabel>
          <TextField 
          value={input.price}
          onChange={handleChange}
          type="number" 
          margin="normal" 
          fullWidth variant='outlined' 
          name='price'
          />
          <FormLabel>Image</FormLabel>
          <TextField
          value={input.image}
          onChange={handleChange} 
          margin="normal" 
          fullWidth variant='outlined' 
          name='image'
          />
          <FormControlLabel 
          control={<Checkbox checked={checked} onChange={()=>setchecked(!checked)} />} label="Available" />
          <Button variant="contained" type='submit'>Add Book</Button>
        </Box>
        </form>
    </div>
  )
}

export default AddBook
