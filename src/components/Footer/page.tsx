import { Link } from "react-router-dom";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-grid">

                <div className="footer-brand">
                    <h2>🚗 DriveNow</h2>

                    <p>
                        Pakistan's most trusted premium car rental service.
                        We bring comfort, luxury, and reliability to every journey.
                    </p>
                </div>

                <div className="footer-col">

                    <h4>Quick Links</h4>

                    <Link to="/">Home</Link>

                    <Link to="/services">Our Fleet</Link>

                    <Link to="/contact">Contact</Link>

                    <Link to="/dashboard">Dashboard</Link>

                </div>

                <div className="footer-col">

                    <h4>Account</h4>

                    <Link to="/login">Login</Link>

                    <Link to="/signup">Sign Up</Link>

                </div>

                <div className="footer-col">

                    <h4>Contact Us</h4>

                    <p>📧 support@drivenow.com</p>

                    <p>📞 0311-1234567</p>

                    <p>📍 Main Boulevard, Islamabad</p>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 DriveNow Car Rental. All Rights Reserved.
                </p>

            </div>

        </footer>

    );

}

export default Footer;