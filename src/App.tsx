import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/home/page";
import Services from "./pages/services/page";
import Contact from "./pages/contact/page";
import Login from "./pages/login/page";
import Dashboard from "./pages/dashboard/page";
import Signup from "./pages/signup/page";



function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route 
          path="/dashboard"
          element={<Dashboard />} />



          <Route
          path="/signup"
          element={<Signup />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;