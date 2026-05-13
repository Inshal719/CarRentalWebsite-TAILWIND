import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="page-wrapper">
        <div className="dashboard-layout">

          {/* SIDEBAR */}
          <aside className="sidebar">

            <div className="sidebar-logo">
              🚗 DriveNow Admin
            </div>

            <ul className="sidebar-nav">

              <li>
                <Link
                  to="/#view-stock"
                  className="active-sidebar"
                >
                  <span className="nav-icon">📋</span>
                  View Stock
                </Link>
              </li>

              <li>
                <Link to="/#insert-stock">
                  <span className="nav-icon">➕</span>
                  Insert Stock
                </Link>
              </li>

              <li>
                <Link to="/#update-panel">
                  <span className="nav-icon">✏️</span>
                  Update Stock
                </Link>
              </li>

              <li>
                <Link to="/#view-stock">
                  <span className="nav-icon">🗑️</span>
                  Delete Stock
                </Link>
              </li>

              <li>
                <Link to="/#chart-section">
                  <span className="nav-icon">📊</span>
                  Statistics
                </Link>
              </li>

              <li>
                <Link to="/">
                  <span className="nav-icon">🏠</span>
                  Main Site
                </Link>
              </li>

            </ul>

          </aside>

          {/* DASHBOARD MAIN */}
          <div className="dashboard-main">

            {/* STATS */}
            <div className="dash-stats">

              <div className="dash-stat-card">
                <h3>Total Vehicles</h3>
                <div className="stat-value">6</div>
              </div>

              <div className="dash-stat-card">
                <h3>Available</h3>
                <div className="stat-value">4</div>
              </div>

              <div className="dash-stat-card">
                <h3>Booked</h3>
                <div className="stat-value">2</div>
              </div>

              <div className="dash-stat-card">
                <h3>Revenue Today</h3>
                <div className="stat-value">Rs.84k</div>
              </div>

            </div>

            {/* VIEW STOCK */}
            <section
              className="dashboard-panel"
              id="view-stock"
            >

              <div className="panel-header">

                <h3>
                  📋 View Stock — All Vehicles
                </h3>

                <span className="panel-subtitle">
                  Click Edit or Delete to manage a record
                </span>

              </div>

              <div className="panel-body">

                <div className="search-box">

                  <input
                    type="number"
                    placeholder="Search by Maximum Price"
                  />

                  <button className="btn-success">
                    Search Price
                  </button>

                </div>

                <div className="table-wrapper">

                  <table>

                    <thead>

                      <tr>
                        <th>#</th>
                        <th>Model</th>
                        <th>Category</th>
                        <th>Seats</th>
                        <th>Transmission</th>
                        <th>Price/Day</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>

                    </thead>

                    <tbody>

                      <tr>
                        <td>1</td>
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

                        <td>
                          <button className="btn-warning">
                            Edit
                          </button>

                          <button className="btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
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

                        <td>
                          <button className="btn-warning">
                            Edit
                          </button>

                          <button className="btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>3</td>
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

                        <td>
                          <button className="btn-warning">
                            Edit
                          </button>

                          <button className="btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>4</td>
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

                        <td>
                          <button className="btn-warning">
                            Edit
                          </button>

                          <button className="btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>5</td>
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

                        <td>
                          <button className="btn-warning">
                            Edit
                          </button>

                          <button className="btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>6</td>
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

                        <td>
                          <button className="btn-warning">
                            Edit
                          </button>

                          <button className="btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>

                    </tbody>

                  </table>

                </div>

              </div>

            </section>

            {/* INSERT STOCK */}
            <section
              className="dashboard-panel"
              id="insert-stock"
            >

              <div className="panel-header">
                <h3>
                  ➕ Insert Stock — Add New Vehicle
                </h3>
              </div>

              <div className="panel-body">

                <div className="alert-error"></div>
                <div className="alert-success"></div>

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="insert-model">
                      Car Model Name
                    </label>

                    <input
                      type="text"
                      id="insert-model"
                      placeholder="e.g. Toyota Camry 2024"
                    />

                  </div>

                  <div className="form-group">

                    <label htmlFor="insert-category">
                      Category
                    </label>

                    <select id="insert-category">

                      <option value="">
                        -- Select Category --
                      </option>

                      <option value="Sedan">
                        Sedan
                      </option>

                      <option value="SUV">
                        SUV
                      </option>

                      <option value="Sports">
                        Sports
                      </option>

                      <option value="Hatchback">
                        Hatchback
                      </option>

                    </select>

                  </div>

                  <div className="form-group">

                    <label htmlFor="insert-seats">
                      No. of Seats
                    </label>

                    <input
                      type="number"
                      id="insert-seats"
                      placeholder="e.g. 5"
                      min="2"
                      max="9"
                    />

                  </div>

                </div>

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="insert-trans">
                      Transmission
                    </label>

                    <select id="insert-trans">

                      <option value="">
                        -- Select --
                      </option>

                      <option value="Automatic">
                        Automatic
                      </option>

                      <option value="Manual">
                        Manual
                      </option>

                    </select>

                  </div>

                  <div className="form-group">

                    <label htmlFor="insert-price">
                      Price Per Day (Rs.)
                    </label>

                    <input
                      type="number"
                      id="insert-price"
                      placeholder="e.g. 8500"
                      min="1000"
                    />

                  </div>

                </div>

                <button className="btn-success">
                  ➕ Add Vehicle to Fleet
                </button>

              </div>

            </section>

            {/* UPDATE STOCK */}
            <section
              className="dashboard-panel panel-hidden"
              id="update-panel"
            >

              <div className="panel-header">

                <h3>
                  ✏️ Update Stock — Edit Vehicle Details
                </h3>

              </div>

              <div className="panel-body">

                <div className="alert-error"></div>
                <div className="alert-success"></div>

                <input
                  type="hidden"
                  id="update-id"
                />

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="update-model">
                      Car Model Name
                    </label>

                    <input
                      type="text"
                      id="update-model"
                      placeholder="Car model name"
                    />

                  </div>

                  <div className="form-group">

                    <label htmlFor="update-cat">
                      Category
                    </label>

                    <select id="update-cat">

                      <option value="Sedan">
                        Sedan
                      </option>

                      <option value="SUV">
                        SUV
                      </option>

                      <option value="Sports">
                        Sports
                      </option>

                      <option value="Hatchback">
                        Hatchback
                      </option>

                    </select>

                  </div>

                  <div className="form-group">

                    <label htmlFor="update-seats">
                      Seats
                    </label>

                    <input
                      type="number"
                      id="update-seats"
                      min="2"
                      max="9"
                    />

                  </div>

                </div>

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="update-trans">
                      Transmission
                    </label>

                    <select id="update-trans">

                      <option value="Automatic">
                        Automatic
                      </option>

                      <option value="Manual">
                        Manual
                      </option>

                    </select>

                  </div>

                  <div className="form-group">

                    <label htmlFor="update-price">
                      Price Per Day (Rs.)
                    </label>

                    <input
                      type="number"
                      id="update-price"
                      min="1000"
                    />

                  </div>

                  <div className="form-group">

                    <label htmlFor="update-status">
                      Status
                    </label>

                    <select id="update-status">

                      <option value="Available">
                        Available
                      </option>

                      <option value="Booked">
                        Booked
                      </option>

                    </select>

                  </div>

                </div>

                <button className="btn-warning">
                  💾 Save Changes
                </button>

              </div>

            </section>

            {/* CHART / STATISTICS */}
            <section
              className="chart-container"
              id="chart-section"
            >

              <h3>
                📊 Fleet Statistics — Graphical Overview
              </h3>

              <div className="bar-chart">

                <div className="bar-item">

                  <div className="bar-value">
                    42
                  </div>

                  <div className="bar-fill sedan-bar"></div>

                  <div className="bar-label">
                    Sedans
                  </div>

                </div>

                <div className="bar-item">

                  <div className="bar-value">
                    35
                  </div>

                  <div className="bar-fill suv-bar"></div>

                  <div className="bar-label">
                    SUVs
                  </div>

                </div>

                <div className="bar-item">

                  <div className="bar-value">
                    23
                  </div>

                  <div className="bar-fill sports-bar"></div>

                  <div className="bar-label">
                    Sports
                  </div>

                </div>

                <div className="bar-item">

                  <div className="bar-value">
                    18
                  </div>

                  <div className="bar-fill booked-bar"></div>

                  <div className="bar-label">
                    Booked
                  </div>

                </div>

                <div className="bar-item">

                  <div className="bar-value">
                    60
                  </div>

                  <div className="bar-fill revenue-bar"></div>

                  <div className="bar-label">
                    Revenue
                  </div>

                </div>

              </div>

              <div className="chart-stats-table">

                <div className="table-wrapper">

                  <table>

                    <thead>

                      <tr>
                        <th>Metric</th>
                        <th>Value</th>
                        <th>Notes</th>
                      </tr>

                    </thead>

                    <tbody>

                      <tr>
                        <td>Total Sedans</td>
                        <td>42</td>
                        <td>Most popular category</td>
                      </tr>

                      <tr>
                        <td>Total SUVs</td>
                        <td>35</td>
                        <td>Family and tour use</td>
                      </tr>

                      <tr>
                        <td>Sports Cars</td>
                        <td>23</td>
                        <td>High demand weekends</td>
                      </tr>

                      <tr>
                        <td>Currently Booked</td>
                        <td>18</td>
                        <td>Active rentals today</td>
                      </tr>

                      <tr>
                        <td>Revenue (today)</td>
                        <td>Rs. 84,000</td>
                        <td>Across all categories</td>
                      </tr>

                    </tbody>

                  </table>

                </div>

              </div>

            </section>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Dashboard;