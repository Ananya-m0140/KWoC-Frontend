import Snowfall from "react-snowfall";
import { HeroComponent } from "../components/Hero";
import Timeline from "../components/Timeline";
import { AboutSection } from "../components/About";
import { Header } from "../components/Header";
import { WhyKWoC } from "../components/WhyKWoC";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import { CSSProperties } from "react";
import "../styles/Santa.css";
import Footer from "../components/Footer"

const santaAnimationStyle: CSSProperties = {
  position: "fixed",
  top: "40%",
  width: "500px",
  height: "500px",
  zIndex: 1,
  pointerEvents: "none" as "none",
  animation: "santa-fly 20s linear infinite",
};

const santaMirrorAnimationStyle: CSSProperties = {
  position: "fixed",
  top: "40%",
  width: "500px",
  height: "500px",
  zIndex: 1,
  pointerEvents: "none" as "none",
  animation: "santa-fly-mirror 20s linear infinite", // Ensure the same duration for uniformity
};

function Home() {
  const [santaAnimationData, setSantaAnimationData] = useState(null);
  const [isLeftToRight, setIsLeftToRight] = useState(true); // State to toggle between animations

  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch("https://lottie.host/205b9306-eb12-4261-b310-bcbe2d44dfaf/8fIFkoFeKd.json");
        const data = await response.json();
        setSantaAnimationData(data);
      } catch (error) {
        console.error("Error fetching the animation data:", error);
      }
    };

    fetchAnimation();

    const interval = setInterval(() => {
      setIsLeftToRight((prev) => !prev); // Toggle between left to right and right to left every time
    }, 20000); // Change direction every 20 seconds (matching animation duration)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
      <Snowfall // the image can be edited into anything we want, feel free to change
        snowflakeCount={150}
        speed={[0.5, 1]} // array takes [min, max]
        wind={[-0.5, 0.5]}
        radius={[2, 4]}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          opacity: '0.5',
        }}
      />

      {santaAnimationData && (
        <Lottie
          animationData={santaAnimationData}
          loop={true}
          autoplay={true}
          style={isLeftToRight ? santaAnimationStyle : santaMirrorAnimationStyle}
        />
      )}

      <Header />
      <HeroComponent />
      <AboutSection />
      <WhyKWoC />
      <Timeline />
      <Footer />
    </>
  );
}

export default Home;
