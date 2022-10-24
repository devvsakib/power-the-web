// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=b14be24a21dfb63b03033f8df9e0fa05
import "./style.css"
import Weathercard from "./weathercard";


import React, { useEffect, useState } from 'react'

const Temp = () => {

    const [searchValue, setsearchValue] = useState("Raigarh");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=b14be24a21dfb63b03033f8df9e0fa05`;

            const res = await fetch(url);
            const data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const {name} = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,

            };
            setTempInfo(myNewWeatherInfo)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, );

    return (
        <>

            <div className='wrap'>
                <div className='search'>
                    <input type="search"
                        placeholder="Enter any city name in world"
                        autoFocus
                        id="search"
                        className="searchTerm"
                        value={searchValue}
                        onChange={(e) => setsearchValue(e.target.value)} />

                    <button className="searchButton" type="button" onClick={getWeatherInfo}>
                        Search
                    </button>

                </div>
                <p>Enter any city Name of world</p>

            </div>

            

            {/* our temp card */}

           <Weathercard tempInfo={tempInfo} />
            
        </>
    )
}

export default Temp
