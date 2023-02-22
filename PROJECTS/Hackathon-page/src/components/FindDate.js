import React, { useState } from 'react'

const FindDate = (props) => {
    const [endDate, setEndDate] = useState(new Date(props.date));
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    const getTwoDigitValue = (value) => {
        if (value < 10) {
          return "0" + value;
        }
        return "" + value;
      };


    const year = `${endDate.getFullYear()}`.substring(2,4);
    const date = `${endDate.getDate()}`;
    const month = months[endDate.getMonth()];
    const hour = getTwoDigitValue((endDate.getHours() + 11) % 12 + 1);
    const mins = getTwoDigitValue(endDate.getMinutes());
    const state = endDate.getHours() >= 12 ? "PM":"AM"
    

  return (
    <>
    {`${date}${date>3?'th': (date==1 ? 'st':(date ==2?'nd':'rd'))}  ${month}'${year} ${hour}:${mins} ${state} `}
    </>
  )
}

export default FindDate
