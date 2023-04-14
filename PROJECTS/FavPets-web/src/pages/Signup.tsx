import { FormEvent, useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const { signup, loading, error } = useSignup();

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		await signup(name, email, password, confirmPassword);
	};

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Register now!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
				</div>
				<form
					className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
					onSubmit={handleSubmit}>
					<div className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								placeholder="name"
								className="input input-bordered"
								value={name}
								onChange={(event) => setName(event.target.value)}
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="email"
								className="input input-bordered"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								placeholder="password"
								className="input input-bordered"
								value={password}
								onChange={(event) => setPassword(event.target.value)}
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Confirm Password</span>
							</label>
							<input
								type="password"
								placeholder="confirm password"
								className="input input-bordered"
								value={confirmPassword}
								onChange={(event) => setConfirmPassword(event.target.value)}
								required
							/>
							<label className="label">
								<a href="#" className="label-text-alt link link-hover">
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary" disabled={loading}>
								Register
							</button>
							{error && (
								<div className="alert alert-error shadow-lg mt-2">
									<span>{error}</span>
								</div>
							)}
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
