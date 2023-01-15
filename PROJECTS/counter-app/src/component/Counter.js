import React , {useState} from 'react'

const Counter=()=>{
    const[count, setcount]= useState(0)
    const increase=()=>{
        setcount(count+1)
    }
    
    const decrease=()=>{
        if(count>0){
        setcount(count-1)
        }
        else{
            setcount(0)
        }
    }

    
    const reset=()=>{
        setcount(0)
    }
    return(
        <div>
            <h1>The Counter App</h1>
            <h2> Counter - {count} </h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Rest</button>
        </div>
    )
}

export default Counter