import './App.css';
import Home from './components/Home/Home';
import Navbar from './pages/Navbar';
import Converter from './components/Converter/Converter';
import Similar from './components/Similar/Similar';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/convert" element={<Converter />}></Route>
        <Route path="/similar" element={<Similar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
