import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";
import { Link } from "react-router-dom";

function Signup() {

  return (

      <>
            <Navbar />


      {/* PAGE HEADER */}
      <header className="page-header">

        <h1>Create Your Account</h1>

        <p>
          Register today and enjoy premium car rentals and exclusive member benefits
        </p>

      </header>

      {/* MAIN CONTENT */}
      <main className="page-wrapper">

        <div className="auth-layout">

          {/* SIDE IMAGE */}
          <div className="auth-image-col">

            <img
              src="/images/img10.jpg"
              alt="Luxury Car Rental Service"
            />

          </div>

          {/* SIGNUP FORM */}
          <div className="auth-form-col">

            <div className="form-wrapper">

              <div className="form-header">

                <h2>Create Account</h2>

                <p>
                  Join DriveNow and start booking premium vehicles instantly
                </p>

              </div>

              <div
                className="alert-error"
                id="signup-error"
              ></div>

              <form>

                <div className="form-group">

                  <label htmlFor="signup-name">
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="signup-name"
                    placeholder="Enter your full name"
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="signup-email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="signup-email"
                    placeholder="Enter your email address"
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="signup-phone">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    id="signup-phone"
                    placeholder="e.g. 0311-1234567"
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="signup-password">
                    Password
                  </label>

                  <input
                    type="password"
                    id="signup-password"
                    placeholder="Create a strong password (min 6 characters)"
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="signup-confirm">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    id="signup-confirm"
                    placeholder="Re-enter your password"
                  />

                </div>

                <div className="checkbox-group">

                  <input
                    type="checkbox"
                    id="terms-check"
                  />

                  <label htmlFor="terms-check">

                    I agree to the DriveNow Terms & Conditions,
                    Privacy Policy, and Rental Agreement.

                  </label>

                </div>

                <button
                  type="submit"
                  className="btn-full"
                >
                  Create My Account
                </button>

              </form>

              <div className="form-footer-note">

                Already have an account?

                <Link to="/login">
                  {" "}Login Here
                </Link>

              </div>

            </div>

          </div>

        </div>

      </main>

    <Footer />

        </>
        

  );

}

export default Signup;