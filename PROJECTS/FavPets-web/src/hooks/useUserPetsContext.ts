import { UserPetsContext } from "../context/userPetsContext";
import { useContext } from "react";

export const useUserPetsContext = () => {
	const context = useContext(UserPetsContext);
	if (!context) {
		throw new Error("useUserPetsContext must be used within a UserPetsContextProvider");
	}
	return context;
};
