import { useContext } from "react";
import { UserContext } from "./context/UserContext"

export const HomePage = () => {
    const {user} = useContext(UserContext);

    return (
        <>
            <h1>Home Page</h1>
            <hr/>
            <h1>{user?.name}</h1>
            <pre>
                {JSON.stringify(user,null, 3)}
            </pre>
        </>
    )
}
