import React,{useState} from 'react'

export default function Textform(props) {

const handleupClick =() =>
{
    let newText = text.toUpperCase();
    setText(newText)
}

const handleOnChange = (event)=>{
    setText(event.target.value)
}
const [text,setText] = useState('');
  return (
    <>
    <div>
<h1>{props.heading}</h1>
<div class="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>

<button className = "btn btn-primary" onClick={handleupClick} >Convert to Uppercase</button> 

    </div>

    <div className='container my-3'>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length-0.008} Minutes read</p>
    </div>
    </>
  )
}
