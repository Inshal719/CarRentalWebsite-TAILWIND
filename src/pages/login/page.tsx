import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";
import { Link } from "react-router-dom";

function Login() {

  return (

    <>

      <Navbar />

      {/* PAGE HEADER */}
      <header className="page-header">

        <h1>Account Login</h1>

        <p>
          Access your DriveNow account to manage
          bookings and rental history
        </p>

      </header>

      {/* MAIN CONTENT */}
      <main className="page-wrapper">

        <div className="auth-layout">

          {/* SIDE IMAGE */}
          <div className="auth-image-col">

            <img
              src="/images/img8.jpg"
              alt="Luxury Car Rental"
            />

          </div>

          {/* LOGIN FORM */}
          <div className="auth-form-col">

            <div className="form-wrapper">

              <div className="form-header">

                <h2>Welcome Back</h2>

                <p>
                  Login to continue your premium
                  car rental experience
                </p>

              </div>

              <div
                className="alert-error"
                id="login-error"
              ></div>

              <form>

                <div className="form-group">

                  <label htmlFor="login-email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="login-email"
                    placeholder="Enter your email address"
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="login-password">
                    Password
                  </label>

                  <input
                    type="password"
                    id="login-password"
                    placeholder="Enter your password"
                  />

                </div>

                <div className="remember-row">

                  <div className="checkbox-group remember-inline">

                    <input
                      type="checkbox"
                      id="remember-me"
                    />

                    <label htmlFor="remember-me">
                      Remember Me
                    </label>

                  </div>

                  <Link to="#">
                    Forgot Password?
                  </Link>

                </div>

                <button
                  type="submit"
                  className="btn-full"
                >
                  Login to Account
                </button>

              </form>

              <div className="form-footer-note">

                Don't have an account?

                <Link to="/signup">
                  {" "}Create Account
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

export default Login;