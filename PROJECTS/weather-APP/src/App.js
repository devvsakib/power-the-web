import { useEffect } from "react";

import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather} from './context/Weather'
import "./App.css";

function App() {
  const weather = useWeather();

  useEffect(() => {
   // get current location here
   weather.fetchCurrentUserLocationData();
  },[]);
  return (
    <div>
      <h1 className = "heading">Weather Forecast</h1>
      
      <Input/>
      <Button onClick={weather.fetchData} value = "Search"/>
      <Card/>
      <Button  value = "Refresh"/>
      
    </div>
  );
}

export default App;
