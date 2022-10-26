import React from "react";
import { Avatar, Card, CardHeader } from "@mui/material";

const User = ({ user }) => {
  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{ width: 56, height: 56 }}
              alt="Cindy Baker"
              src={user.avatar}
            />
          }
          title={user.first_name + "  " + user.last_name}
          subheader={`Email :  ${user.email}`}
        />
        Delete
      </Card>
    </>
  );
};

export default User;
