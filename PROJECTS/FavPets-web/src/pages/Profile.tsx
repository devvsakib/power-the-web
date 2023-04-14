import { PetDetail } from "../components/pets/PetDetail";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useUserPetsContext } from "../hooks/useUserPetsContext";
import AddPet from "../components/pets/AddPet";

const Profile = () => {
	const { user } = useAuthContext();
	const { userPets, dispatch }: any = useUserPetsContext();

	const [isShowAddPetForm, setIsShowAddPetForm] = useState<boolean>(false);

	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUserPets = async () => {
			const response = await fetch(
				`${import.meta.env.VITE_BASE_API_URL}/api/v1/pets/user/${user?.id}`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${user?.token}`,
						"Content-type": "application/json",
					},
				}
			);
			const result = await response.json();
			if (response.ok) {
				dispatch({ type: "SET_USER_PETS", payload: result });
				setLoading(false);
			}
			if (!response.ok) {
				setError(result.message);
				setLoading(false);
			}
		};
		fetchUserPets();
	}, []);

	return (
		<div>
			<h1 className="text-4xl text-center my-2">Profile</h1>
			<div className="flex flex-col">
				{user && (
					<button
						onClick={() => setIsShowAddPetForm(true)}
						className="btn btn-accent btn-sm self-end mx-5">
						Post your favorite pet
					</button>
				)}
			</div>
			<div>
				{isShowAddPetForm && <AddPet setIsShowAddPetForm={setIsShowAddPetForm} />}
				{loading && (
					<div className="flex justify-center content-center my-5">
						<progress className="progress progress-info w-56" />
					</div>
				)}
				{error && <h1 className="text-8xl text-center my-2">{error}</h1>}
				<PetDetail
					userPets={userPets}
					setError={setError}
				/>
			</div>
		</div>
	);
};

export default Profile;
