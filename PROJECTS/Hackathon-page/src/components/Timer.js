import React, { useState } from "react";
import { useEffect } from "react";
import FindDate from "./FindDate"; 


const Timer = (props) => {   

  const findtime = (status, start, end) => {
    var time = new Date();

    if (status == "Upcoming") {
      time= new Date(start);
    } else if (status == "Active") {
        time= new Date(end);
    } else if (status == "Past") {
        time= new Date(end);
    }

    return time;
  };

const getTwoDigitValue = (value) => {
    if (value < 10) {
      return "0" + value;
    }
    return "" + value;
  };

  var endDate = findtime(props.e.status,props.e.start_time,props.e.end_time);
  //   var Daysleft, Hoursleft, Minsleft, Secleft;
  const [daysleft, setDaysLeft] = useState("00");
  const [hoursleft, setHoursleft] = useState("00");
  const [minsleft, setMinsleft] = useState("00");
  const [secleft, setSecleft] = useState("00");

  

  useEffect(() => {

    const calculateCountdown = () => {
      endDate = findtime(props.e.status,props.e.start_time,props.e.end_time);
      const start = new Date();
      const end = endDate;

      const timeRemaining = end.getTime() - start.getTime();
      

      if (timeRemaining >= 0) {
        const start_date = new Date(start);
        const end_date = new Date(end);
        const start_millis = start_date.getTime(); // Get timestamp of start date
        const end_millis = end_date.getTime(); // Get timestamp of end date

        // Convert to seconds, 1 second = 1000 milli seconds
        const old_sec = start_millis / 1000;
        const current_sec = end_millis / 1000;

        // Get remaining seconds
        let seconds = current_sec - old_sec;

        let days = Math.floor(seconds / (24 * 60 * 60)); // 1 day is equal to 24 hours, each hour has 60 mins and 60 seconds
        seconds -= days * 24 * 60 * 60; // Get remaining seconds

        let hours = Math.floor(seconds / (60 * 60)); // 1 hour has 60 mins and 60 seconds
        seconds -= hours * 60 * 60; // Get remaining seconds

        let minutes = Math.floor(seconds / 60); // 1 minute is equal to 60 seconds
        seconds -= minutes * 60; // Get remaining seconds

        days = Math.abs(days);
        hours = Math.abs(hours);
        minutes = Math.abs(minutes);
        seconds = Math.floor(Math.abs(seconds));

        const convertedDays = getTwoDigitValue(days);
        const convertedHours = getTwoDigitValue(hours);
        const convertedMins = getTwoDigitValue(minutes);
        const convertedSeconds = getTwoDigitValue(seconds);

        setDaysLeft(convertedDays);
        setHoursleft(convertedHours);
        setMinsleft(convertedMins);
        setSecleft(convertedSeconds);

        
      }
    };

    const interval = setInterval(() => calculateCountdown(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    {/* {console.log(daysleft, hoursleft, minsleft, secleft)} */}
      <div className={"counter "+(props.e.status!='Past'? "active" : "inactive")}>
        <div className="time">
          <div className="time-value">{daysleft}</div>
          <div className="time-label">Days</div>
        </div>
        <div className="seperater">
            :
        </div>
        <div className="time">
          <div className="time-value">{hoursleft}</div>
          <div className="time-label">Hours</div>
        </div>
        <div className="seperater">
            :
        </div>
        <div className="time">
          <div className="time-value">{minsleft}</div>
          <div className="time-label">Mins</div>
        </div>
        <div className="seperater">
            :
        </div>
        <div className="time">
          <div className="time-value">{secleft}</div>
          <div className="time-label">Secs</div>
        </div>
      </div>
      <div className={"ended_on "+(props.e.status=='Past'? "active" : "inactive")}>
            <FindDate date={props.e.end_time}/>
        </div>
    </>
  );
};

export default Timer;
