import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useSignin = () => {
	const { dispatch } = useAuthContext();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

    const navigate = useNavigate();

	const signin = async (email: string, password: string) => {
		setLoading(true);
		setError(null);
		const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/v1/users/signin`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});
		const data = await response.json();
		if (!response.ok) {
			setLoading(false);
			setError(data.message);
		}
		if (response.ok) {
			sessionStorage.setItem("user", JSON.stringify(data));
			dispatch({ type: "LOGIN", payload: data });
			setLoading(false);
            navigate("/");
		}
	};
	return { loading, error, signin };
};
