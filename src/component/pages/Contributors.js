import React from "react";
import GetContributors from "../Contributors/GetContributors";
function Contributors() {
  return (
    <div className="w-full ">
      <div className="text-center text-uppercase m-8 text-white">
        <h1 className="text-4xl font-semibold"> Our Contributors </h1>
        <p className="text-base"> Thanks To All Contributors. Join Us </p>
      </div>
 
      <GetContributors />

    </div>
  )
}

export default Contributors;
