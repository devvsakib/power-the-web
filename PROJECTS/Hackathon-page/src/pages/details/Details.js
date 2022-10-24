import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import Card_data from '../../components/Sample';
import { useNavigate } from "react-router-dom";
import './details.scss';
import image from '../../assets/icons/carbon_skill.svg';



const Details = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [id,setId] = useState(searchParams.get("id"));
  

  const data= Card_data.filter((e)=>{
    return e.id==id;
  })[0];

  const time = data.status =='Upcoming'? new Date(data.start_time) : new Date(data.end_time)

  const [endDate, setEndDate] = useState(time);
  const navigate = useNavigate();



  const findString=(str)=>{ 
           if (data.status == "Upcoming") {
          str='Starts on';
        } else if (data.status == "Active") {
          str='Ends on';
        } else if (data.status == "Past") {
          str='Ended on';
        }
        return str
      }
  var str =findString();
  // console.log(data)

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const getTwoDigitValue = (value) => {
      if (value < 10) {
        return "0" + value;
      }
      return "" + value;
    };

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  const year = `${endDate.getFullYear()}`.substring(2,4);
  const date = `${endDate.getDate()}`;
  const month = months[endDate.getMonth()];
  const hour = getTwoDigitValue((endDate.getHours() + 11) % 12 + 1);
  const mins = getTwoDigitValue(endDate.getMinutes());
  const state = endDate.getHours() >= 12 ? "PM":"AM"

  
  const deleteItem = (id)=>{
    // console.log('funtion called');
    const updatedList= Card_data.filter((e)=>{
      return e.id!=id;
    })
    // console.log(updatedList);
    Card_data.length=0;
    Card_data.push(...updatedList);
    // console.log(Card_data);
    navigate('/');

  }


 
  return (
    <>
    <div className="details-section">
      <div className="challenge-heading">
        <div className="time">
        <i className="bi bi-clock"></i> 
        {`${str} ${date}th ${month}'${year} ${hour}:${mins} ${state} (India Standard Time)`}
        </div>
        <div className="name">
          {data.name}
        </div>
        <div className="desc">
          {data.desc}
        </div>
        <div className="level">
          <img src={image} alt="" /> {data.level}
        </div>
      </div>
      
    </div>
    <div className="edit-section">
        <div className="overview">
          Overview
        </div>
        <div className="options">
        <button type="button" className="btn btn-success" onClick={()=>{navigate(`/edit/?id=${data.id}`);}}>Edit</button>
        <button type="button" className="btn btn-outline-danger" onClick={()=>{deleteItem(data.id)}}>Delete</button>
        </div>
      </div>
      <div className="description-section">
        {`${data.overview}`}

      </div>
    </>
  )
}

export default Details
