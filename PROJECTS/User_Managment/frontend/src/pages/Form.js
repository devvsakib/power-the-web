import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./style.css";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  avatar: "",
};

const Form = () => {
  const [user, setUser] = useState(initialState);

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setUser({ ...user, [name]: value });
    console.log(value);
  };

  const createUserHandler = async () => {
    //create new user
    toast("Create new user");
  };

  return (
    <div className="inputFields">
      <ToastContainer position="bottom-right" newestOnTop />
      <div className="nameField">
        <TextField
          required
          fullWidth
          size="small"
          id="outlined-required"
          label="First Name"
          value={user.first_name}
          name="first_name"
          onChange={inputChangeHandler}
          //   defaultValue="Hello World"
        />
        <TextField
          required
          fullWidth
          size="small"
          id="last_name"
          label="Last Name"
          value={user.last_name}
          name="last_name"
          onChange={inputChangeHandler}
          //   defaultValue="Hello World"
        />
      </div>
      <div className="emailField">
        <TextField
          required
          fullWidth
          size="small"
          id="outlined-required"
          label="Email"
          value={user.email}
          name="email"
          onChange={inputChangeHandler}
          //   defaultValue="Hello World"
        />
      </div>
      <input
        type={"file"}
        value={user.avatar}
        onChange={inputChangeHandler}
        name="avatar"
      />
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={createUserHandler}
      >
        Create user
      </Button>
    </div>
  );
};

export default Form;
