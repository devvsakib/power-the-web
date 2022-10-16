import React, { useState, useEffect,useContext } from "react";
import "./challenge_card.scss";
import Timer from "../Timer";
import Card_data from "../Sample";
import { Link ,useNavigate } from "react-router-dom";

   

const Challenge_card = (props) => {

  // const cardItems  = useContext(ListStates);
   const [time, setTime] = useState(new Date());
   const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    
    <>
      {Card_data.map((e) => {

        const findStatus = (start, end) => {
          var status = "";
          const pres = time;

          if (start.getTime() > pres.getTime()) {
            status = "Upcoming";
          } else if (end.getTime() > pres.getTime()) {
            status = "Active";
          } else {
            status = "Past";
          }

          return status;
        };

        const findHeading = (status) => {
          var heading = "";

          if (status == "Upcoming") {
            heading='Starts in';
          } else if (status == "Active") {
            heading='Ends in';
          } else if (status == "Past") {
            heading='Ended on';
          }

          return heading;
        };

        const getTwoDigitValue = value => {
            if (value < 10) {
              return '0' + value;
            }
            return '' + value;
          }

        const startTime = new Date(e.start_time);
        const endTime = new Date(e.end_time);

        e.status = findStatus(startTime, endTime);
        const heading = findHeading(e.status)


        return (
          <div className={"card-body " + e.visible } key={e.id} onClick={()=>navigate(`/details/?id=${e.id}`)}>
            <div className="card-image">
              <img src={e.image} alt="" />
            </div>
            <div className={e.status}>{e.status}</div>
            <div className="card-name">{e.name}</div>
            <div className="countdown">
              <div className="countdown-header">
                {heading}
              </div>
              <div className="countdown-timer">
                <Timer e={e}/>
              </div>
            </div>
            <Link to={`/details/?id=${e.id}`}  >
            <button className="participate btn">
              <i className="bi bi-check2-circle"></i>
              Participate Now
            </button>
            </Link>
            
          </div>
        );
      })}
    </>
  );
};

export default Challenge_card;
