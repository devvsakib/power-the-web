import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchCard from "../components/SearchCard";
const Search = () => {
  const [qry, setQry] = useState("");
  const [res, setRes] = useState([]);
  const [type, setType] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setType(e.target.value);
  };

  const onChange = (e) => {
    e.preventDefault();
    setQry(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=fe9c4de3ab83a981cc93907f97dbdd79&language=en-US&&query=${e.target.value}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.errors) {
          setRes(data.results);
        } else {
          setRes([]);
        }
      });
  };
  return (
    <>
      <Head>
        <title>Search Page</title>
      </Head>
      <Navbar />
      <div
        className="flex justify-center items-center
    mt-10"
      >
        <div className="relative bg-gray-900 p-2 rounded  w-[500px]">
          <input
            type="text"
            placeholder="Search..."
            className="placeholder:italic placeholder:text-slate-400 block bg-transparent w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-white"
            value={qry}
            onChange={onChange}
          />
        </div>
      </div>
      <div></div>
      {res.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mt-16 ml-40 mb-16">
          {res.map((result) => {
            return (
              <div key={result.id}>
                <SearchCard result={result} key={result.id} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Search;
