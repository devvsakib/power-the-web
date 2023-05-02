import { PetsContext } from "../context/petsContext";
import { useContext } from "react";

export const usePetsContext = () => {
	const context = useContext(PetsContext);
	if (!context) {
		throw new Error("usePetsContext must be used within a PetsContextProvider");
	}
	return context;
};
