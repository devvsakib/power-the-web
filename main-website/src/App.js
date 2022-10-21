import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import "./main.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
