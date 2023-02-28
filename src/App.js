import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/pages/Home";
import Projects from "./component/pages/Projects";
import Blog from "./component/pages/Blog";
import "./main.css";
import Contributors from "./component/pages/Contributors";
import Footer from "./component/Footer/Footer";
import Guidelines from "./component/pages/Guidelines";
import ScrollToTop from "./component/Button/ScrollToTop";
import GetStarted from "./component/Guidelines/pages/GetStarted";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/contributors" exact element={<Contributors />}></Route>
        <Route path="/projects" exact element={<Projects />}></Route>
        <Route path="/blog" exact element={<Blog />}></Route>
        <Route path="/guidelines" exact element={<Guidelines />}></Route>
        <Route path="/guidelines/getstarted" exact element={<GetStarted />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
