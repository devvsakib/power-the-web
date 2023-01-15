import React from 'react';
import ReactDOM from 'react-dom/client';
import HooksApp from './HooksApp';
import { BrowserRouter } from "react-router-dom";

// import './08-useReducer/intro-reducer'
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HooksApp />
    </BrowserRouter>
  </React.StrictMode>
)
