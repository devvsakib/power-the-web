import React from "react";
import { useContext } from "react";
import userContext from "../context/userContext";
import { Container } from "@mui/system";
import "./style.css";
import User from "./User";
import Form from "./Form";

// const dumydata = [
//   {
//     id: 123,
//     first_name: "user",
//     last_name: "1",
//     email: "user1@gmail.com",
//     avtar: "https://unsplash.com/photos/WNoLnJo7tS8",
//   },
// ];
const Home = () => {
  const userList = useContext(userContext);
  console.log(userList.data);

  const users = userList.data;
  //console.log(users);

  //console.log(dumydata);

  return (
    <>
      <Container container maxWidth={"lg"} className="container">
        <div className="title">User List</div>
        <div className="form">
          <Form />
        </div>
        {users &&
          users.map((user) => {
            return (
              <div className="user" key={user.id}>
                <User user={user} />
              </div>
            );
          })}
      </Container>
    </>
  );
};

export default Home;
