import logo from './logo.svg';
import './App.css';
import FirstPage from './component/FirstPage';
import SecondPage from './component/SecondPage'
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import NodeState from './component/NodeState';
function App() {
  return (

    <NodeState>
    <Router>

<div className="App">

          <Routes>
            <Route path='/' element={<FirstPage />} />
            <Route path='Second' element={<SecondPage />} />

          </Routes>

        </div>
      </Router>
    </NodeState>
  );
}

export default App;
