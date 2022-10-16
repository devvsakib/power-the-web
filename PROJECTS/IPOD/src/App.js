import './App.css';

import Home from './pages/Home';
import Controller from './pages/Controller';
import Paths from './config/Paths';
import { BrowserRouter, Router } from 'react-router-dom';


function App() {

  return (
    <div className="App">
       <div className='pod-box'>
        {/* router is used to naviagte to different displays */}
       <BrowserRouter>
       <div className='pod-display'> 
       <Paths/>
       </div>
       <Controller/>
      </BrowserRouter>
          {/* <Home/> */}
        
       </div>
    </div>
  );
}

export default App;
