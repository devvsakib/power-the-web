import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { themeChange } from "theme-change";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
	const { user } = useAuthContext();

	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/signup"
						element={!user ? <Signup /> : <Navigate to="/profile" />}
					/>
					<Route
						path="/signin"
						element={!user ? <Signin /> : <Navigate to="/profile" />}
					/>
					<Route path="/profile" element={user ? <Profile /> : <Navigate to="/" />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
