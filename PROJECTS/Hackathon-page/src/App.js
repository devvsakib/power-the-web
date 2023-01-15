import "./App.scss";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Paths from "./config/Paths";

function App() {
  return (
  
      <BrowserRouter>
              <Header />
              <Paths />
      </BrowserRouter>
  
  );
}

export default App;
