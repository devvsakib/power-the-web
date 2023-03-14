import React from "react";
import Layout from "..";
import GetContributors from "../Contributors/GetContributors";
function Contributors() {
  return (
    <Layout>
      <div className="text-center text-uppercase m-8 text-white">
        <h1 className="text-4xl font-semibold"> Our Contributors </h1>
        <p className="text-base"> Thanks To All Contributors. Join Us </p>
      </div>
 
      <GetContributors />

    </Layout>
  )
}

export default Contributors;
