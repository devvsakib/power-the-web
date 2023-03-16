import React, { useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import './style.css';



const apikey = process.env.REACT_APP_API_KEY;


const WeatherApp = () => {
  const [temperature, setTemperature] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  const [city, setCity] = useState("Berlin");
  const [country, setCountry] = useState("DE");



  const getWeatherData = (city, country) => {
    axios({
      method: "GET",
      url:  `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apikey}`,
    })
      .then((response) => {
        console.log(response.data.main.temp);
        // Kelvin to Fahrenheit
        // setTemperature((response.data.main.temp - 273.15) * 1.8 + 32);

        // Kelvin to Celsius
        setTemperature(response.data.main.temp - 273.15);
        // console.log(response.data);
        setDesc(response.data.weather[0].main);
      //  setCity(response.data.sys.timezone.name);
        console.log(response.data.name);

        console.log(response.data.sys.country);
        //console.log(response.data.weather[0].icon);
        setIcon(response.data.weather[0].icon);

      })
      .catch((error) => {
        console.log(error);
      });
      //getWeatherData(this.useState, 'DE')

  };



  return (
    <>
      <div className="wrap-box">

      <div className="weather-box">
      <img className={icon === "01n" ? "nightime" : "weather-icon" } src={ `http://openweathermap.org/img/wn/${icon}@2x.png` } />
      <p style={{ margin: 0 }}>
      <span className="header"><strong>{city} Weather</strong></span>
        <span className="date">  {new Date().toLocaleString()}</span>
          <br />
            <span className="temp"><strong>
          {/* {Math.round(temperature * 100) / 100} ℉ */}
          {Math.round(temperature * 100) / 100} ℃ - {desc}
                 { getWeatherData(city, country) }
                 </strong></span>
      {/*<img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />*/}
</p>
        </div>

</div>

    </>
  );

};


render(<WeatherApp />, document.querySelector("#root"));
