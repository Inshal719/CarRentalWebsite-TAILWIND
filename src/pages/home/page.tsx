import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";
import { Link } from "react-router-dom";

function Home() {

    return (

        <>

            <Navbar />

            <main>

                {/* HERO SECTION */}
                <section className="hero-section">

                    <div className="hero-text">
                        
                        <h1>
                            Rent Your <span>Dream Car</span> Today
                        </h1>

                        <p>
                            Luxury sedans, sports cars, SUVs, and executive vehicles
                            available across Pakistan. Affordable rates, premium experience.
                        </p>

                        <div className="hero-buttons">

                            <button className="btn-primary">
                                Browse Fleet
                            </button>

                            <button className="btn-outline">
                                Book Now
                            </button>

                        </div>

                    </div>

                    <div className="hero-image-box">

                        <img
                            src="/images/img1.jpg"
                            alt="Luxury Rental Car"
                        />

                    </div>

                </section>

                {/* STATS BAR */}
                <div className="stats-bar">

                    <div className="stat-block">
                        <h2>200+</h2>
                        <p>Cars Available</p>
                    </div>

                    <div className="stat-block">
                        <h2>12+</h2>
                        <p>Cities Covered</p>
                    </div>

                    <div className="stat-block">
                        <h2>5,000+</h2>
                        <p>Happy Customers</p>
                    </div>

                    <div className="stat-block">
                        <h2>24/7</h2>
                        <p>Customer Support</p>
                    </div>

                </div>

                {/* FEATURED CARS */}
                <section id="fleet">

                    <div className="section-title">

                        <h2>Featured Cars</h2>

                        <p>
                            Explore our most popular rental vehicles
                        </p>

                        <div className="title-line"></div>

                    </div>

                    <div className="filter-bar">

                        <button className="filter-btn active-filter">
                            All Cars
                        </button>

                        <button className="filter-btn">
                            Sedans
                        </button>

                        <button className="filter-btn">
                            SUVs
                        </button>

                        <button className="filter-btn">
                            Sports
                        </button>

                    </div>

                    <div className="cards-grid">

                        {/* CARD 1 */}
                        <article className="car-card">

                            <img
                                src="/images/img1.jpg"
                                alt="MD-42 Luxury Sedan"
                            />

                            <div className="car-card-body">

                                <span className="car-card-badge">
                                    Sedan
                                </span>

                                <h3>MD-42 Luxury Sedan</h3>

                                <p>
                                    Executive sedan designed for comfort,
                                    business travel, and daily luxury.
                                </p>

                                <span className="car-price-tag">
                                    Rs. 7,500 / day
                                </span>

                                <Link
                                    to="#"
                                    className="btn-primary"
                                >
                                    Book Now
                                </Link>

                            </div>

                        </article>

                        {/* CARD 2 */}
                        <article className="car-card">

                            <img
                                src="/images/img2.jpg"
                                alt="Black Mustang"
                            />

                            <div className="car-card-body">

                                <span className="car-card-badge">
                                    Sports
                                </span>

                                <h3>Black Mustang</h3>

                                <p>
                                    High-performance sports car built
                                    for thrill, speed, and style.
                                </p>

                                <span className="car-price-tag">
                                    Rs. 9,000 / day
                                </span>

                                <Link
                                    to="#"
                                    className="btn-primary"
                                >
                                    Book Now
                                </Link>

                            </div>

                        </article>

                        {/* CARD 3 */}
                        <article className="car-card">

                            <img
                                src="/images/img3.jpg"
                                alt="Mercedes G-Wagon"
                            />

                            <div className="car-card-body">

                                <span className="car-card-badge">
                                    SUV
                                </span>

                                <h3>Mercedes G-Wagon</h3>

                                <p>
                                    Premium SUV perfect for families,
                                    tours, and luxury experiences.
                                </p>

                                <span className="car-price-tag">
                                    Rs. 12,000 / day
                                </span>

                                <Link
                                    to="#"
                                    className="btn-primary"
                                >
                                    Book Now
                                </Link>

                            </div>

                        </article>

                    </div>

                </section>

                {/* GALLERY SECTION */}
                <section className="gallery-section">

                    <div className="section-title">

                        <h2>Our Luxury Collection</h2>

                        <p>
                            A glimpse into our premium fleet
                        </p>

                        <div className="title-line"></div>

                    </div>

                    <div className="gallery-grid">

                        <img src="/images/img1.jpg" alt="Car Image 1" />
                        <img src="/images/img2.jpg" alt="Car Image 2" />
                        <img src="/images/img3.jpg" alt="Car Image 3" />
                        <img src="/images/img4.jpg" alt="Car Image 4" />
                        <img src="/images/img5.jpg" alt="Car Image 5" />
                        <img src="/images/img6.jpg" alt="Car Image 6" />

                    </div>

                </section>

                {/* ABOUT BANNER */}
                <div className="about-banner">

                    <div className="about-text-box">

                        <h2>Why Choose DriveNow?</h2>

                        <p>
                            DriveNow is trusted by thousands of customers across Pakistan
                            for reliable, affordable, and luxury vehicle rentals.
                        </p>

                        <p>
                            Our fleet includes sedans, SUVs, sports cars, and executive
                            vehicles suitable for weddings, business trips, family travel,
                            and tourism across 12+ cities.
                        </p>

                        <Link
                            to="#"
                            className="btn-primary"
                        >
                            View Our Fleet
                        </Link>

                    </div>

                    <div className="about-image-box">

                        <img
                            src="/images/img4.jpg"
                            alt="DriveNow Fleet"
                        />

                    </div>

                </div>
{/* FEATURES / SERVICES */}
<section>

    <div className="section-title">

        <h2>Our Services</h2>

        <p>
            More than just car rentals
        </p>

        <div className="title-line"></div>

    </div>

    <div className="features-grid">

        <div className="feature-card">

            <span className="feature-icon">📅</span>

            <h3>Easy Online Booking</h3>

            <p>
                Reserve your vehicle in minutes
                with our hassle-free booking system.
            </p>

        </div>

        <div className="feature-card">

            <span className="feature-icon">🏆</span>

            <h3>Premium Vehicles</h3>

            <p>
                All vehicles are regularly maintained
                for comfort and safety.
            </p>

        </div>

        <div className="feature-card">

            <span className="feature-icon">🛡️</span>

            <h3>Fully Insured</h3>

            <p>
                Every rental includes comprehensive
                insurance coverage.
            </p>

        </div>

        <div className="feature-card">

            <span className="feature-icon">📞</span>

            <h3>24/7 Support</h3>

            <p>
                Our support team is available
                anytime you need assistance.
            </p>

        </div>

        <div className="feature-card">

            <span className="feature-icon">✈️</span>

            <h3>Airport Pickup</h3>

            <p>
                Convenient airport pickup and drop-off
                services across Pakistan.
            </p>

        </div>

        <div className="feature-card">

            <span className="feature-icon">💳</span>

            <h3>Flexible Payment</h3>

            <p>
                Multiple payment options including
                cash, card, and transfer.
            </p>

        </div>

    </div>

</section>

{/* TESTIMONIALS */}
<section>

    <div className="section-title">

        <h2>Customer Reviews</h2>

        <p>
            What our clients say about DriveNow
        </p>

        <div className="title-line"></div>

    </div>

    <div className="testimonials-grid">

        <div className="testimonial-card">

            <div className="testimonial-stars">
                ★★★★★
            </div>

            <p>
                "Excellent service! The car was in perfect condition
                and delivery was on time."
            </p>

            <div className="testimonial-author">
                — Ahmed Raza, Islamabad
            </div>

        </div>

        <div className="testimonial-card">

            <div className="testimonial-stars">
                ★★★★★
            </div>

            <p>
                "Rented the G-Wagon for our family trip.
                Absolutely loved the experience."
            </p>

            <div className="testimonial-author">
                — Sara Khan, Lahore
            </div>

        </div>

        <div className="testimonial-card">

            <div className="testimonial-stars">
                ★★★★☆
            </div>

            <p>
                "Professional team and well-maintained fleet.
                Booking process was very smooth."
            </p>

            <div className="testimonial-author">
                — Bilal Mahmood, Karachi
            </div>

        </div>

    </div>

</section>       

            </main>

            <Footer />

        </>

    );

}

export default Home;