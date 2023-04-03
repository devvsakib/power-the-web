import React, { useState } from "react"
import './githubUserSearch.css';
import User from "./user";

async function fetchResults(query) {
    try {
        const response = await fetch(`https://api.github.com/search/users?q=${query}`);
        const json = await response.json();
        return json.items || [];
    } catch (error) {
        throw new Error(error);
    }
}



export default function GithubUserSearch() {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("")



    function handleUserSearch(e) {
        setQuery(e.target.value)
    }
    async function onSearchSubmit(e) {
        e.preventDefault();
        const results = await fetchResults(query);
        setUsers(results);


    }


    return (
        <div className="container5">
            <h1>Project 5: Github user search</h1>

            <div className="findUserForm">
                <input className="searchUser" onChange={handleUserSearch} value={query} type="text" placeholder="search github user" />
                <button className="searchUser" onClick={onSearchSubmit} type="submit" >Submit</button>
            </div>
            <div className="usersList">
                <h2>Users</h2>
                {users.map(user => {
                    return (
                        <User key={user.login} img_src={user.avatar_url} username={user.login} link={user.html_url} />
                    )

                })}

            </div>


        </div>
    )
}
