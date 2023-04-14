import React,{useState,useContext} from 'react';
import './First.css'
import nodeContext from './nodeContext';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
  
    const navigate=useNavigate();
    const[box,setbox]=useState('');
    const a=useContext(nodeContext)
const handleSubmit = () =>{
    if(box.length===0){
        console.log(box.length);
        alert("provide a non-empty value")
    }else{
        a.setState(box);
        a.setprevious(box)
        a.setresultant('');
        navigate('/Second');
    }
}

    return <div className='d-c-r'>
        <div className='container'>
            <p>Duplicate Character Remover</p>
            <div className='Text-box'>
                <input type="text" value={box} placeholder="Enter a String......" onChange={event=>setbox(event.target.value.charCodeAt()===32?'':event.target.value)}/>
            </div>

            <div className='submit-button'>
                <button type='submit' onClick={handleSubmit}> Submit</button>
            </div>
        </div>


    </div>;
}


export default FirstPage;