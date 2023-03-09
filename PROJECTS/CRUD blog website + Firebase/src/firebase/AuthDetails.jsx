import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./base";
import { useState, useEffect } from "react";

const AuthDetails = () => {
    const [username, setUserName] = useState(null);
    const [user, setUser] = useState(null);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setUserName(localStorage.getItem("username"));
            } else {
                setUser(null);
            }
        });
        return () => listen();
    }, []);
    return (
        <div>
            {user ? (
                <div>
                    <h1>Logged in as {username}</h1>
                    <h2>{user.email}</h2>
                </div>
            ) : (
                <h1>Not logged in</h1>
            )}
        </div>
    );
}

export default AuthDetails;