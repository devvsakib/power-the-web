import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import ZingTouch from 'zingtouch';
import Song from "../assets/songs/life.mp3"



const Controller=()=>{
     const navigate=useNavigate();
     const [navigateTo,setNavigate]=useState(null);



     // on page load call the funvtion setcontroller to zingtouch object; 
     useEffect(()=>{
      console.log("load tt");
      setcontroller();
     })

    //page will get the current page so that we can set activelist to chnage the options in home/music
    const page=window.location.pathname;
    var  f=15;
 

    const List=[
      [
       "coverflow",
      "music",
       "games",
       "settings"
     ],
      [
       "allsongs",
       "artist",
      "albums"
      ],   
    ]

    // checking and setting the activelist
    if (page=="/"){
      var  activeList=List[0]
    }else if(page=="/music"){
      var activeList=List[1];

    }
//  on click of menu the display will be redirected to Home page
    const home=(e)=>{
          e.preventDefault();
          navigate('/')

    }
    // defineng variable for zingtouch
    var touchArea;
    var angle;

    // audio for palying in allsongs in music
    var audio = new Audio(Song);
    var playing;
    const play=()=>{
          if(playing === true){
              audio.pause();
              playing=false;
          }else{
            audio.play();
            playing=true;
          } 
    }
// on click of enter button it will first check if page is all songs if it is then audio will be played/pause
// else it will navigate to the highlighted section
    const loadto=(e)=>{
      e.preventDefault();
        if(page =="/allsongs"){
          play();
        }else{
    //  console.log(navigateTo)
          navigate(navigateTo);
        }
    }

    const setcontroller=()=>{
      if(page == "/" || page== "/music"){
          touchArea = document.getElementById('controller');
          const myRegion = new ZingTouch.Region(touchArea);

          f=15;
          var i=0;
          
          const activeLenght=activeList.length;
          

          myRegion.bind(touchArea, 'rotate', function(e){
              angle=e.detail.angle;         
              if( Math.abs(e.detail.distanceFromOrigin) > f){
                console.log("bingo",f);
                f+=15;
                const active=document.getElementById(activeList[i]);
                
                if (i== 0){
                  var j=activeLenght-1;
                  console.log(j,"inside if")
                }else{
                var j=Math.abs((i-1))%(activeLenght);
                }
                const inactive=document.getElementById(activeList[j]);
                // console.log(inactive);
                inactive.className="";
                // console.log(active,"after")
                active.className = "active";
                setNavigate("/"+activeList[i]);
                i=(i+1)%activeLenght;
                // console.log(active);
              }
        
        
          });
      }
    }

    return (
      <div className='pod-controller' id='controller' >
          <div id='Menu' onClick={home}>
            <h3><a>Menu </a></h3>
          </div>
          <div className='controller-mid' >
                <i className="fa-solid fa-backward-fast"></i>
                <div id='enter' className='enter' onClick={loadto}></div> 
                <i className="fas fa-forward-fast"></i>
          </div>
          <div className='play-pause'>
              <i className="fas fa-play"></i> 
              <i className="fas fa-regular fa-pause"></i>
          </div>
      
      </div>
    ) ;
    }



export default Controller;