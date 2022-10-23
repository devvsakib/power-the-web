import React from "react";
import data from "../../Contributors.json";

function Contributors() {
  return (
    <div>
      <h1>Contributors</h1>
      {data.profiles.map((profile) => {
        return <h1>{profile.name}</h1>;
      })}
    </div>
  );
}

export default Contributors;
