import { useState } from "react";
import { UserContext } from "./UserContext"

// const user = {
// 	id:123,
// 	name: 'Angel Moreno',
// 	email: 'angelmoreno@google.com'
// }

export const UserProvider = ({children}) => {

	const [user, setUser] = useState();

    return (
		<UserContext.Provider value={{user, setUser}}>
			{ children }
		</UserContext.Provider>
	)
}
