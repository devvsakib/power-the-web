import { useEffect, useState } from "react";
import UserContext from "./userContext";
import axios from "axios";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  avatar: "",
};

const UserState = (props) => {
  const [user, setUser] = useState(initialState);
  useEffect(() => {
    const fetchUser = async () => {
      const usr = await axios.get("https://reqres.in/api/users?page=1");
      setUser(usr.data);
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserState;
