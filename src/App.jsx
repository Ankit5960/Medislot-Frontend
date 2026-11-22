
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Doctors from "./pages/doctors";
import Login from "./pages/login";
import MyAppointment from "./pages/MyAppointment";
import MyProfile from "./pages/myprofile";
import Appointment from "./pages/appointment";

// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
