import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav className="navbar">

            <Link to="/" className="navbar-brand">
                🚗 DriveNow
            </Link>

            <button
                className="hamburger"
                aria-label="Toggle Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className="navbar-links" id="nav-menu">

                <li>
                    <Link to="/" className="active-link">
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/services">
                        Our Fleet
                    </Link>
                </li>

                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>

                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>

                <li>
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                </li>

                <li>
                    <Link to="/signup">
                        <button className="btn-nav">
                            Sign Up
                        </button>
                    </Link>
                </li>

            </ul>

        </nav>

    );

}

export default Navbar;