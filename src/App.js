import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import HowTo from "./pages/Howto";
import Contact from "./pages/Contact";
import Join from "./pages/Join";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/how_to" element={<HowTo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
