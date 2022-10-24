import React from "react"
import { Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Home from "./component/pages/Home";
import Projects from "./component/pages/Projects";
import Blog from "./component/pages/Blog";
import "./main.css";
import Contributors from "./component/pages/Contributors";
import Footer from "./component/Footer/Footer";
import Roadmap from "./component/pages/Roadmap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/contributors' exact element={<Contributors />} ></Route>
        <Route path='/projects' exact element={<Projects />} ></Route>
        <Route path='/blog' exact element={<Blog />} ></Route>
        <Route path='/roadmap' exact element={<Roadmap />} ></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
