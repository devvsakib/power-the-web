import React,{useContext} from 'react';
import './Card.css'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import nodeContext from './nodeContext';


const Card = ({value,index,uniqueChar}) => {
  const a=useContext(nodeContext)
 const tempstr=[...a.state];

  

    const handleClick= (e,i)=>{
        
         
         const arrstr=tempstr.filter((ele,ind)=>{
           return (
            ind===i || ele!==e
           )
        })
          
        a.setState(arrstr);
        a.setprevious(tempstr)
        a.setresultant(arrstr);
      
        if(uniqueChar.size===arrstr.length){
            setTimeout(()=>{
                
                document.querySelector('.Success-header').style.display="flex"
                
            },100)
        }
        }
           
    let col=value.charCodeAt() < 97 ? 65:97
    if(value.charCodeAt()<65){
        col=33
    } 
    
   const items = [  "#915c83", 
   "blue",
   "yellow",
   "green",
   "orange",
   "#deb887",
   "Aqua",
   "#de5d83",
   "#809980",
   "#E6FF80",
   "#1AFF33",
   "#5d8aa8",
   "#FF3380",
   "#CCCC00",
   "#ffbf00",
   "#4D80CC",
   "#FF4D4D",
   "#99E6E6",
   "#000080","#7fffd4","#de3163","#df00ff","#faf0be","#ffbcd9","#893f45","#9f8170"];

    return( <div>
        
        
        <div className="-container" style={{backgroundColor: items[value.charCodeAt()-col]}}>
            
               <div className='cross' onClick={()=>handleClick(value,index)}>
                < ClearOutlinedIcon/>
               </div>
               <div className="inner-cont">
               <h2>{value}</h2>
               </div>
              
              
        </div>
    </div>
    );
    }



export default Card;