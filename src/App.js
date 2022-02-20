import Section1 from "components/Section1";
import React, { useEffect } from "react";
import scrollreveal from "scrollreveal";
import Section2 from "./components/Section2";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Section3 from "components/Section3";
import Slider from "components/slider/Slider";
import Contact from "components/Contact";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  useEffect(() => {
    const registerAnimation = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "90px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `#nav, #home, #section1, #section2, #section3, #Section1, #Section2, #Slider, #contact, #upper-footer, #lower-footer`,
        { opacity: 0, interval: 200 }
      );
    };
    registerAnimation();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementById("home");
    home.style.transform = "none";
  }, 1500);
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Navbar />
        <Home />
        <Section1 />
        <Section2 />
        <Section3 />
        <Slider />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
