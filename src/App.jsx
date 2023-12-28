import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "././pages/Tailwind.css";
import "./App.css";
import Instruction from "./pages/Instruction";
import Profile from "./pages/Profile";
import Island from "./pages/Island";
import Pretest from "./pages/Pretest";
import Province from "./pages/Province";
import Culture from "./pages/Culture";
import Error from "./pages/Error";
import Jawa from "./pages/Province/Jawa";
import Bali from "./pages/Province/Bali";
import Sumatera from "./pages/Province/Sumatera";
import Kalimantan from "./pages/Province/Kalimantan";
import Sulawesi from "./pages/Province/Sulawesi";
import Papua from "./pages/Province/Papua";
import Posttest from "./pages/Posttest";
import { AnimatePresence } from "framer-motion";

function App() {
  // const location = useLocation();
  const [isScreenSizeValid, setIsScreenSizeValid] = useState(false);

  useEffect(() => {
    const minScreenWidthPercentage = 45;
    const minScreenHeightPercentage = 50;

    const handleResize = () => {
      const screenWidthPercentage =
        (window.innerWidth / window.screen.availWidth) * 100;
      const screenHeightPercentage =
        (window.innerHeight / window.screen.availHeight) * 100;

      const isSizeValid =
        screenWidthPercentage >= minScreenWidthPercentage &&
        screenHeightPercentage >= minScreenHeightPercentage;

      setIsScreenSizeValid(isSizeValid);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-waves bg-no-repeat bg-fixed bg-center bg-cover">
      {isScreenSizeValid ? (
        <AnimatePresence mode="wait">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Instruction />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/island" element={<Island />} />
              <Route path="/province" element={<Province />} />
              <Route path="/jawa" element={<Jawa />} />
              <Route path="/bali" element={<Bali />} />
              <Route path="/sumatera" element={<Sumatera />} />
              <Route path="/kalimantan" element={<Kalimantan />} />
              <Route path="/sulawesi" element={<Sulawesi />} />
              <Route path="/papua" element={<Papua />} />
              <Route path="/pretest/:id" element={<Pretest />} />
              <Route path="/culture/:id" element={<Culture />} />
              <Route path="/posttest" element={<Posttest />} />
            </Routes>
          </BrowserRouter>
        </AnimatePresence>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default App;
