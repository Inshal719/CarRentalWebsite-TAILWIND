import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

 export default function contact() {

  return (

    <>
    
      <Navbar />

      {/* PAGE HEADER */}
      <header className="page-header">

        <h1>Contact DriveNow</h1>

        <p>
          Our support team is ready to help you with
          bookings, pricing, and rental information
        </p>

      </header>

      {/* MAIN CONTENT */}
      <main className="page-wrapper">

        <div className="contact-layout">

          {/* CONTACT INFO */}
          <aside className="contact-info-col">

            <div className="contact-info-item">

              <span className="contact-info-icon">
                📍
              </span>

              <div>
                <h4>Office Address</h4>

                <p>
                  Main Boulevard Road,
                  Islamabad, Pakistan
                </p>
              </div>

            </div>

            <div className="contact-info-item">

              <span className="contact-info-icon">
                📞
              </span>

              <div>
                <h4>Phone Number</h4>

                <p>0311-1234567</p>
              </div>

            </div>

            <div className="contact-info-item">

              <span className="contact-info-icon">
                📧
              </span>

              <div>
                <h4>Email Address</h4>

                <p>support@drivenow.com</p>
              </div>

            </div>

            <div className="contact-info-item">

              <span className="contact-info-icon">
                🕐
              </span>

              <div>
                <h4>Working Hours</h4>

                <p>
                  Monday – Saturday:
                  9:00 AM – 8:00 PM
                </p>
              </div>

            </div>

            <img
              src="/images/img4.jpg"
              alt="DriveNow Office"
              className="contact-map-img"
            />

          </aside>

          {/* CONTACT FORM */}
          <div className="contact-form-col">

            <div className="form-wrapper">

              <div className="form-header">

                <h2>Send Us a Message</h2>

                <p>
                  Fill the form below and our team
                  will respond within 24 hours
                </p>

              </div>

              <div
                className="alert-error"
                id="contact-error"
              ></div>

              <div
                className="alert-success"
                id="contact-success"
              ></div>

              <form>

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="contact-name">
                      Full Name
                    </label>

                    <input
                      type="text"
                      id="contact-name"
                      placeholder="Enter your full name"
                    />

                  </div>

                  <div className="form-group">

                    <label htmlFor="contact-email">
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="contact-email"
                      placeholder="Enter your email"
                    />

                  </div>

                </div>

                <div className="form-group">

                  <label htmlFor="contact-subject">
                    Subject
                  </label>

                  <input
                    type="text"
                    id="contact-subject"
                    placeholder="e.g. Booking Inquiry, Pricing Question"
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="contact-message">
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    placeholder="Write your message here..."
                  ></textarea>

                </div>

                <button
                  type="submit"
                  className="btn-full"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

        {/* FAQ SECTION */}
        <section className="faq-section">

          <div className="section-title">

            <h2>
              Frequently Asked Questions
            </h2>

            <p>
              Common questions about DriveNow
              car rental services
            </p>

            <div className="title-line"></div>

          </div>

          <div className="features-grid">

            <div className="feature-card">

              <span className="feature-icon">
                ❓
              </span>

              <h3>
                How do I book a car?
              </h3>

              <p>
                Visit our Fleet page, choose your
                vehicle, fill the booking form and
                confirm.
              </p>

            </div>

            <div className="feature-card">

              <span className="feature-icon">
                💳
              </span>

              <h3>
                What payment methods?
              </h3>

              <p>
                We accept cash, debit/credit card,
                and bank transfer.
              </p>

            </div>

            <div className="feature-card">

              <span className="feature-icon">
                🔄
              </span>

              <h3>
                What is the cancellation policy?
              </h3>

              <p>
                Free cancellation up to 24 hours
                before pickup.
              </p>

            </div>

            <div className="feature-card">

              <span className="feature-icon">
                📋
              </span>

              <h3>
                Documents required?
              </h3>

              <p>
                A valid CNIC and driving license
                are required.
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>

  );

}
