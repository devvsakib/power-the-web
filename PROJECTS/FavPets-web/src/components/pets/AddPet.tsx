import { useState } from "react";
import "./AddPet.css";
import { usePetsContext } from "../../hooks/usePetsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useUserPetsContext } from "../../hooks/useUserPetsContext";

const AddPet = ({ setIsShowAddPetForm }: any) => {
	const { dispatch } = usePetsContext();
	const { user } = useAuthContext();
	const { dispatch: userPetsDispatch }: any = useUserPetsContext();

	const [pet, setPet] = useState({
		src: "",
		name: "",
		age: "",
		type: "",
		breed: "",
		description: "",
		owner: user?.id,
	});

	const handleChange = (event: any) => {
		setPet((prevState: any) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		if (!user) {
			setError("You must be logged in to post a pet");
			return;
		}
		setLoading(true);

		const newPet = {
			...pet,
			age: parseInt(pet.age),
		};

		const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/v1/pets`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${user?.token}`,
				"Content-type": "application/json",
			},
			body: JSON.stringify(newPet),
		});
		const result = await response.json();
		if (!response.ok) {
			setError(result.message);
			setLoading(false);
		}
		if (response.ok) {
			dispatch({ type: "ADD_PET", payload: result });
			userPetsDispatch({ type: "ADD_USER_PET", payload: result });
			setLoading(false);
			setIsShowAddPetForm(false);
		}
	};

	return (
		<div className="mainModal">
			<div className="modal-box w-11/12 max-w-5xl">
				<button
					className="btn btn-warning btn-sm btn-square absolute right-2 top-2"
					onClick={() => setIsShowAddPetForm(false)}>
					X
				</button>
				<div>
					<form onSubmit={handleSubmit}>
						{error && <p className="text-red-500">{error}</p>}
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Pet Image URL</span>
							</label>
							<input
								name="src"
								type="url"
								className="input input-bordered"
								onChange={handleChange}
								required
								autoComplete="off"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Pet Name</span>
							</label>
							<input
								name="name"
								type="text"
								className="input input-bordered"
								onChange={handleChange}
								required
								autoComplete="off"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Pet Age</span>
							</label>
							<input
								name="age"
								type="number"
								className="input input-bordered"
								onChange={handleChange}
								required
								autoComplete="off"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Pet Type</span>
							</label>
							<input
								name="type"
								type="text"
								className="input input-bordered"
								onChange={handleChange}
								required
								autoComplete="off"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Pet Breed</span>
							</label>
							<input
								name="breed"
								type="text"
								className="input input-bordered"
								onChange={handleChange}
								required
								autoComplete="off"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Pet Description</span>
							</label>
							<textarea
								className="textarea textarea-bordered"
								name="description"
								rows={5}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="form-control hidden">
							<label className="label">
								<span className="label-text">Pet Owner</span>
							</label>
							<input
								name="owner"
								type="id"
								className="input input-bordered"
								value={user.id}
								required
								disabled
							/>
						</div>
						<div className="form-control">
							<button
								type="submit"
								disabled={loading}
								className="btn btn-success mt-3">
								Post your favorite pet, let people know!
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddPet;
