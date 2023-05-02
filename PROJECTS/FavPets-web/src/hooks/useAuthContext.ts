import { AuthContext } from "../context/authContext";
import { useContext } from "react";

export const useAuthContext = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuthContext must be used within a AuthContextProvider");
	}
	return context;
};
