import { FormLabel, TextField,Box, Button,FormControlLabel,Checkbox} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const BookDetail = () => {
  const history=useNavigate();
    const [input, setinput] = useState({});
    const id=useParams().id;
    const[checked,setchecked]=useState(false)

    useEffect(()=>{
        const fetchHandler=async()=>{
            await axios
            .get(`http://localhost:5000/books/${id}`)
            .then((res)=>res.data).then(data=>setinput(data.book));
        };
        fetchHandler()
    },[id]);

    const sendRequest=async()=>{
      await axios.put(`http://localhost:5000/books/${id}`,{
        name:String(input.name),
      author:String(input.author),
      description:String(input.description),
      price:Number(input.price),
      available:Boolean(checked),
      image:String(input.image)
      }).then(res=>res.data)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        sendRequest().then(()=>history("/books"))
    }
    const handleChange=(event)=>{
      setinput((prevState)=>({
      ...prevState,[event.target.name]:event.target.value
    }));
  };

    

  return (
   
    <div>
          {input &&<form onSubmit={handleSubmit}>
            <Box
            display="flex" 
            flexDirection="column" 
            justifyContent={'center'} 
            maxWidth={700} 
            alignContent={"center"} 
            alignSelf={"center"}
            marginLeft={"auto"}
            marginRight={"auto"}
            marginTop={20}
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
            <Button variant="contained" type='submit'>Update Book</Button>
          </Box>
          </form>}

    </div>
  )
}

export default BookDetail;