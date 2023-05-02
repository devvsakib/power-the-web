import { createContext, useReducer } from "react";

export const UserPetsContext = createContext<any | null>(null);

export const useUserPetsReducer = (
	state: { userPets: any },
	action: { type: any; payload: any }
) => {
	switch (action.type) {
		case "SET_USER_PETS":
			return {
				userPets: action.payload,
			};
		case "ADD_USER_PET":
			return {
				userPets: [action.payload, ...state.userPets],
			};
		case "DELETE_USER_PET":
			return {
				userPets: state.userPets.filter((userPet: any) => userPet.id !== action.payload.id),
			};
		case "UPDATE_USER_PET":
			return {
				userPets: state.userPets.map((userPet: any) =>
					userPet.id === action.payload.id ? action.payload : userPet
				),
			};
		default:
			return state;
	}
};

export const UserPetsContextProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(useUserPetsReducer, { userPets: [] });

	return (
		<UserPetsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</UserPetsContext.Provider>
	);
};
