import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

function services() {
  return (
    <>
      <Navbar />

     <section className="page-header">

    <h1>Our Premium Fleet</h1>

    <p>
        Explore luxury sedans, sports cars, and SUVs
        available for rental across Pakistan
    </p>

</section>
<div className="section-title">

    <h2>Search by Category</h2>

    <p>Filter our fleet by vehicle type</p>

    <div className="title-line"></div>

</div>
<main>
        {/* FILTER BAR */}
        <div className="filter-bar">
          <button className="filter-btn active-filter">
            All Vehicles
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

        {/* PRICE FILTER */}
        <div className="price-filter">

        <label htmlFor="price-range">
       Filter by Max Price per Day:{" "}
       <strong id="price-display">Rs. 20,000</strong>
      </label>

     <div className="price-filter-box">

     <input
      type="range"
      min="5000"
      max="20000"
      defaultValue="20000"
      className="price-range"
    />

    <button className="btn-primary">
      Reset Filters
    </button>

  </div>

</div>
        {/* CAR GRID */}
        <div className="cards-grid">

          {/* CARD 1 */}
          <article className="car-card">

            <img src="/images/img1.jpg" alt="Luxury Sedan" />

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

              <button className="btn-primary">
                Book Now
              </button>

            </div>

          </article>

          {/* CARD 2 */}
          <article className="car-card">

            <img src="/images/img2.jpg" alt="Black Mustang" />

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

              <button className="btn-primary">
                Book Now
              </button>

            </div>

          </article>

          {/* CARD 3 */}
          <article className="car-card">

            <img src="/images/img3.jpg" alt="Mercedes G-Wagon" />

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

              <button className="btn-primary">
                Book Now
              </button>

            </div>

          </article>
        
  {/* CARD 4 */}
  <article className="car-card">

    <img src="/images/img4.jpg" alt="Audi A8" />

    <div className="car-card-body">

      <span className="car-card-badge">
        Sedan
      </span>

      <h3>Audi A8</h3>

      <p>
        Luxury executive sedan with advanced comfort
        and premium driving experience.
      </p>

      <span className="car-price-tag">
        Rs. 11,000 / day
      </span>

      <button className="btn-primary">
        Book Now
      </button>

    </div>

  </article>

  {/* CARD 5 */}
  <article className="car-card">

    <img src="/images/img5.jpg" alt="Toyota Prado" />

    <div className="car-card-body">

      <span className="car-card-badge">
        SUV
      </span>

      <h3>Toyota Prado</h3>

      <p>
        Spacious SUV perfect for long routes,
        family trips, and tours.
      </p>

      <span className="car-price-tag">
        Rs. 13,500 / day
      </span>

      <button className="btn-primary">
        Book Now
      </button>

    </div>

  </article>

  {/* CARD 6 */}
  <article className="car-card">

    <img src="/images/img6.jpg" alt="BMW Sports Edition" />

    <div className="car-card-body">

      <span className="car-card-badge">
        Sports
      </span>

      <h3>BMW Sports Edition</h3>

      <p>
        Stylish sports vehicle designed for
        speed, luxury, and performance.
      </p>

      <span className="car-price-tag">
        Rs. 15,000 / day
      </span>

      <button className="btn-primary">
        Book Now
      </button>

    </div>

  </article>

</div>

{/* PRICING TABLE */}
<section>

  <div className="section-title">
    <h2>Pricing & Availability</h2>

    <p>
      Click on a row to auto-fill the booking form below
    </p>

    <div className="title-line"></div>
  </div>

  <div className="fleet-table-section">
  <div className="table-wrapper">

    <table>

      <thead>
        <tr>
          <th>Car Model</th>
          <th>Category</th>
          <th>Seats</th>
          <th>Transmission</th>
          <th>Price / Day</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>MD-42 Luxury Sedan</td>
          <td>Sedan</td>
          <td>5</td>
          <td>Automatic</td>
          <td>Rs. 7,500</td>

          <td>
            <span className="status-available">
              Available
            </span>
          </td>
        </tr>

        <tr>
          <td>Black Mustang</td>
          <td>Sports</td>
          <td>4</td>
          <td>Manual</td>
          <td>Rs. 9,000</td>

          <td>
            <span className="status-available">
              Available
            </span>
          </td>
        </tr>

        <tr>
          <td>Mercedes G-Wagon</td>
          <td>SUV</td>
          <td>5</td>
          <td>Automatic</td>
          <td>Rs. 12,000</td>

          <td>
            <span className="status-available">
              Available
            </span>
          </td>
        </tr>

        <tr>
          <td>Black Mustang GT</td>
          <td>Sports</td>
          <td>4</td>
          <td>Automatic</td>
          <td>Rs. 9,500</td>

          <td>
            <span className="status-available">
              Available
            </span>
          </td>
        </tr>

        <tr>
          <td>Mercedes G-Wagon AMG</td>
          <td>SUV</td>
          <td>5</td>
          <td>Automatic</td>
          <td>Rs. 15,000</td>

          <td>
            <span className="status-booked">
              Booked
            </span>
          </td>
        </tr>

        <tr>
          <td>MD-42 Executive</td>
          <td>Sedan</td>
          <td>5</td>
          <td>Automatic</td>
          <td>Rs. 8,000</td>

          <td>
            <span className="status-booked">
              Booked
            </span>
          </td>
        </tr>

      </tbody>

    </table>

  </div>

 </div>
</section>

{/* BOOKING FORM */}
<section>

  <div className="section-title">

    <h2>Book Your Vehicle</h2>

    <p>
      Fill in the form below to confirm your reservation
    </p>

    <div className="title-line"></div>

  </div>

  <div className="form-wrapper booking-form-center">

    <div className="alert-error" id="booking-error"></div>

    <div className="alert-success" id="booking-success"></div>

    <form>

      <div className="form-row">

        <div className="form-group">

          <label htmlFor="pickup">
            Pick-Up Location
          </label>

          <input
            type="text"
            id="pickup"
            placeholder="e.g. Islamabad Airport"
          />

        </div>

        <div className="form-group">

          <label htmlFor="dropoff">
            Drop-Off Location
          </label>

          <input
            type="text"
            id="dropoff"
            placeholder="e.g. Lahore City"
          />

        </div>

      </div>

      <div className="form-group">

        <label htmlFor="selected-car">
          Select Vehicle
        </label>

        <select id="selected-car">

          <option value="">
            -- Choose Your Vehicle --
          </option>

          <option value="MD-42 Luxury Sedan">
            MD-42 Luxury Sedan — Rs. 7,500/day
          </option>

          <option value="Black Mustang">
            Black Mustang — Rs. 9,000/day
          </option>

          <option value="Mercedes G-Wagon">
            Mercedes G-Wagon — Rs. 12,000/day
          </option>

          <option value="Black Mustang GT">
            Black Mustang GT — Rs. 9,500/day
          </option>

          <option value="Mercedes G-Wagon AMG">
            Mercedes G-Wagon AMG — Rs. 15,000/day
          </option>

          <option value="MD-42 Executive">
            MD-42 Executive — Rs. 8,000/day
          </option>

        </select>

      </div>

      <div className="form-row">

        <div className="form-group">

          <label htmlFor="pickup-date">
            Pick-Up Date
          </label>

          <input
            type="date"
            id="pickup-date"
          />

        </div>

        <div className="form-group">

          <label htmlFor="return-date">
            Return Date
          </label>

          <input
            type="date"
            id="return-date"
          />

        </div>

      </div>

      <button
        type="submit"
        className="btn-full"
      >
        Confirm Booking
      </button>

    </form>

  </div>

</section>

      </main>

      <Footer />
    </>
  );
}

export default services;