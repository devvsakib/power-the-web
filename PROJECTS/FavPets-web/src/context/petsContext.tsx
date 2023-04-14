import { createContext, useReducer } from "react";

export const PetsContext = createContext<any | null>(null);

export const usePetsReducer = (state: { pets: any }, action: { type: any; payload: any }) => {
	switch (action.type) {
		case "SET_PETS":
			return {
				pets: action.payload,
			};
		case "ADD_PET":
			return {
				pets: [action.payload, ...state.pets],
			};
		// case "DELETE_PET":
		// 	return {
		// 		pets: state.pets.filter((pet: any) => pet.id !== action.payload.id),
		// 	};
		case "UPDATE_PET":
			return {
				pets: state.pets.map((pet: any) =>
					pet.id === action.payload.id ? action.payload : pet
				),
			};
		default:
			return state;
	}
};

export const PetsContextProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(usePetsReducer, { pets: [] });

	return <PetsContext.Provider value={{ ...state, dispatch }}>{children}</PetsContext.Provider>;
};
