import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { UserPetsContext } from "../context/userPetsContext";

export const useSignout = () => {
	const { dispatch } = useContext(AuthContext);
	const { dispatch: userPetsDispatch } = useContext(UserPetsContext);

	const signout = () => {
		sessionStorage.removeItem("user");
		dispatch({ type: "LOGOUT" });
		userPetsDispatch({ type: "SET_USER_PETS", payload: [] });
	};
	return { signout };
};
