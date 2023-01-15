import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
            // <Link to="/">Home</Link>
            // <Link to="/about">About</Link>
            // <Link to="/login">Login</Link>
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/">
                                Home
                            </NavLink>
                            <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/about">
                                About
                            </NavLink>
                            <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/login">
                                Login
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
