import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

export const fetchWeather = async (query) =>{
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    console.log(data);

    return data;
}


//API ka data setquery meh store karne ka aur jo query rehta usko alag components meh pass karke data fetch karne ka 