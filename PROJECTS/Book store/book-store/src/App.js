import React from "react";
import Header from "./components/Header";
import {Route,Routes}from 'react-router-dom';
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import About from "./components/About";
import Books from "./components/Book/Books";
import BookDetail from './components/Book/Book-detail'
function App() {
  return (
    <React.Fragment>
        <div >
      <Header>
        <Header/>
      </Header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/add" element={<AddBook/>} exact/>
          <Route path="/books" element={<Books/> } exact/>
          <Route path="/about" element={<About/>} exact/>
          <Route path="/books/:id" element={<BookDetail/>} exact/>
        </Routes>
      </main>
    </div>
    </React.Fragment>
  
  );
}

export default App;
