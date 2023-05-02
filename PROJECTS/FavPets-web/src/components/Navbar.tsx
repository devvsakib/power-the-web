import { Link } from "react-router-dom";
import { useSignout } from "../hooks/useSignout";
import { useAuthContext } from "../hooks/useAuthContext";

const themes = [
	"light",
	"dark",
	"cupcake",
	"bumblebee",
	"emerald",
	"corporate",
	"synthwave",
	"retro",
	"cyberpunk",
	"valentine",
	"halloween",
	"garden",
	"forest",
	"aqua",
	"lofi",
	"pastel",
	"fantasy",
	"wireframe",
	"black",
	"luxury",
	"dracula",
	"cmyk",
	"autumn",
	"business",
	"acid",
	"lemonade",
	"night",
	"coffee",
	"winter",
];

const Navbar = () => {
	const { signout } = useSignout();
	const { user } = useAuthContext();

	const handleClick = () => {
		signout();
	};

	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					Pets
				</Link>
			</div>
			<div className="flex-none">
				<div className="dropdown dropdown-end mr-1">
					<div tabIndex={0} className="btn gap-1 normal-case btn-ghost">
						<span className="hidden md:inline">Theme</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2x1 mt-16">
						<div className="grid grid-cols1 gap-3 p-3" tabIndex={0}>
							{themes.map((theme) => (
								<div
									className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2 outline"
									data-set-theme={theme}
									key={theme}
									data-act-classname="outline">
									<div
										data-theme={theme}
										className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
										<div className="grid grid-cols-5 grid-rows-3">
											<div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
												<div className="flex-grow text-sm font-bold">
													{theme}
												</div>
												<div className="flex flex-shrink-0 flex-wrap gap-1">
													<div className="bg-primary w-2 rounded" />
													<div className="bg-secondary w-2 rounded" />
													<div className="bg-accent w-2 rounded" />
													<div className="bg-neutral w-2 rounded" />
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<ul className="menu menu-horizontal p-0">
					{user ? (
						<>
							<li>
								<Link to="/profile" className="btn btn-outline normal-case mr-1">
									Hi, {user.name}
								</Link>
							</li>
							<li>
								<button
									className="btn btn-error btn-outline mr-1"
									onClick={handleClick}>
									Log out
								</button>
							</li>
						</>
					) : (
						<>
							<li>
								<Link className="btn btn-primary btn-outline mr-1" to="/signin">
									Sign In
								</Link>
							</li>
							<li>
								<Link className="btn btn-secondary btn-outline mr-1" to="/signup">
									Sign Up
								</Link>
							</li>
						</>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
