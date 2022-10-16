import React, { useEffect, useState } from 'react'


const Weathercard = ({ tempInfo }) => {

    const [weatherState, setweatherState] = useState();
 
    const  {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,

    } = tempInfo;

    useEffect(() => {
        if(weathermood){
            switch (weathermood) {
                case "Sunny":setweatherState("wwi-day-sunny");
                    
                break;
                case "Clouds":setweatherState("wi-day-cloudy");
                    
                    break;
                    case "Haze":setweatherState("wi-fog");
                    
                    break;
                    case "Clear":setweatherState("wi-day-sunny");
                    
                    break;
                    case "Mist":setweatherState("wi-dust");
                    
                    break;
            
                default:setweatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood]);

    //converting sec to time

 let sec = sunset;
 let date = new Date(sec * 1000);
 let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className='country'>
                        <div className="place"> {name}, {country}</div>
                        <img src={`https://countryflagsapi.com/png/${country}`} alt=""/>
                        </div>
                       
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                {/* our 4 divided section */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={`wi ${weatherState}`}>  </i></p>
                            <p className="extra-info-leftside">
                                {timeStr} <br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}>  </i></p>
                            <p className="extra-info-leftside">
                            {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>


                    {/*  */}

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-rain"}>  </i></p>
                            <p className="extra-info-leftside">
                            {pressure} <br />
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-strong-wind"}>  </i></p>
                            <p className="extra-info-leftside">
                            {speed} <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
    </>
  )
}

export default Weathercard
