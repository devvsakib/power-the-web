import "./App.css";

import Login from "./Components/Login";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Wishlist from "./Components/Wishlist";
import Add from "./Components/Add";
import Element from "./Components/Element";
import { auth } from "./firebase";
import { useStateValue } from "./Components/StateProvider";
import SearchResult from "./Components/SearchResult";
function App() {
  const [{}, dispatch] = useStateValue();
  const [{ b1,basket }] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User Is >>>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET-USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET-USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />{" "}
              </>
            }
            exact
          />
          <Route
            exact
            path="/signup"
            element={
              <>
                {" "}
                <SignUp />
              </>
            }
          />

          <Route
            exact
            path="/Login"
            element={
              <>
                {" "}
                <Login />
              </>
            }
          />
          <Route
            exact
            path="/wishlist"
            element={
              <>
                {" "}
                <Navbar />
                <Wishlist />
              </>
            }
          />
          <Route
            exact
            path="/sr"
            element={
              <>
                {" "}
                <Navbar />
                {basket.map((item) => (
                  
                  <SearchResult 
                    image={item.image}
                    title={item.title}
                    phone={item.phone}
                    price={item.price}
                    disc={item.disc}
                    id={item.id}
                    t={item.t}
                  />
                ))}
              </>
            }
          />
          <Route
            exact
            path="/add"
            element={
              <>
                {" "}
                <Navbar />
                <Add />
              </>
            }
          />
          <Route
            exact
            path="/ele"
            element={
              <>
                {" "}
                <Navbar />
                {b1.map((item) => (
                  <Element
                    image={item.image}
                    title={item.title}
                    phone={item.phone}
                    price={item.price}
                    disc={item.disc}
                    id={item.id}
                    t={item.t}
                  />
                ))}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
