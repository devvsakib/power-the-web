import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {


    const {user, setUser} = useContext(UserContext);

    return (
        <>
            <h1>LoginPage</h1>
            <hr/>

            <pre>
                {JSON.stringify(user,null, 3)}
            </pre>

            <button className="btn btn-primary"
            onClick={() => setUser({name: 'Angel', id:98, email:'angel@gmail.com'})}>
                Set user
            </button>
        </>
    )
}
