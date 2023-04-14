import { useState } from "react";
import { useUserPetsContext } from "../../hooks/useUserPetsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import UpdatePet from "./UpdatePet";
import { formatDistanceToNow } from "date-fns";

export function PetDetail({ userPets, setError }: any) {
	const [isShowUpdatePetForm, setIsShowUpdatePetForm] = useState<boolean>(false);
	const [pet, setPet] = useState<any>(null);

	const { dispatch } = useUserPetsContext();
	const { user } = useAuthContext();

	const handleDeletePet = async (id: any) => {
		const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/v1/pets/${id}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${user?.token}`,
				"Content-type": "application/json",
			},
		});
		const result = await response.json();
		if (response.ok) {
			dispatch({ type: "DELETE_USER_PET", payload: result });
		}
		if (!response.ok) {
			setError(result.message);
		}
	};

	const handleGetPetById = async (event: any) => {
		const getPetById = await fetch(
			`${import.meta.env.VITE_BASE_API_URL}/api/v1/pets/${event}`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${user?.token}`,
					"Content-type": "application/json",
				},
			}
		);
		const result = await getPetById.json();
		if (getPetById.ok) {
			setPet(result);
			setIsShowUpdatePetForm(true);
		}
		if (!getPetById.ok) {
			setError(result.message);
		}
	};

	return (
		<div className="flex flex-col justify-center content-center items-center">
			{isShowUpdatePetForm && (
				<UpdatePet setIsShowUpdatePetForm={setIsShowUpdatePetForm} updatePet={pet} />
			)}
			<section className="mt-4 mb-4 mx-auto w-10/12 relative">
				<div className="grid justify-center gap-3">
					{userPets?.map((userPet: any) => (
						<div key={userPet.id} className="card card-side bg-base-300 shadow-xl">
							<figure
								style={{
									maxWidth: "50%",
								}}>
								<img src={userPet.src} alt={userPet.name} />
							</figure>
							<div className="card-body">
								<div className="card-actions justify-end">
									<button
										className="btn btn-outline btn-sm"
										onClick={() => handleGetPetById(userPet.id)}>
										EDIT
									</button>
									<button
										className="btn btn-error btn-sm"
										onClick={() => handleDeletePet(userPet.id)}>
										DELETE
									</button>
								</div>
								<h2 className="card-title">{userPet.name}</h2>
								<p>Age: {userPet.age}</p>
								<p>Type: {userPet.type}</p>
								<p>Breed: {userPet.breed}</p>
								<p>Description: {userPet.description}</p>
								<p>{formatDistanceToNow(new Date(userPet.createdAt))} ago</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
