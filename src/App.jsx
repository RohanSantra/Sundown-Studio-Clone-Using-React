import { useRef, useState, useEffect } from "react";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import FixedImage from "./components/fixedImage";
import HeroSection from "./components/HeroSection";
import Loader from "./components/Loader";
import Marque from "./components/marque";
import Card from "./components/card";
import ClientSwiper from "./components/Swiper";
import Footer from "./components/Footer";

export default function App() {

  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <>
      <Loader />
      <FixedImage image={hoveredImage} />
      <div className="main">
        <div className="main-container">
          <HeroSection />
          <Marque />
          <About />
          <FeaturedProjects setHoveredImage={setHoveredImage} />
          <Card />
          <ClientSwiper />
        </div>
      </div>
      <div className="page6"></div>
      <Footer />
    </>
  );
}