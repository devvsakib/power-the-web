import React,{useState} from 'react'
import NodeContext from './nodeContext'

const NodeState=(props)=>{
  const [state,setState]=useState('');
  const [previous,setprevious]=useState('');
  const [resultant,setresultant]=useState('');
  
    return(
        <NodeContext.Provider value={{state,setState,resultant,setresultant,previous,setprevious}}>
          {props.children}
        </NodeContext.Provider>
    )
   

}
export default NodeState;
