import { HeroComponent } from "../components/Hero";
import Timeline from "../components/Timeline";
import { AboutSection } from "../components/About";
import { Header } from "../components/Header";
import { WhyKWoC } from "../components/WhyKWoC";
import "../styles/Santa.css";
import Footer from "../components/Footer"

function Home() {

  return (
    <>
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
