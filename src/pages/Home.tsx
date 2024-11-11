import { HeroComponent } from "../components/Hero";
import Timeline from "../components/Timeline";
import { AboutSection } from "../components/About";
import { Header } from "../components/Header";
import { WhyKWoC } from "../components/WhyKWoC";
import "../styles/Santa.css";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer"

function Home() {

  return (
    <>
      <Header />
      <HeroComponent />
      <AboutSection />
      <WhyKWoC />
      <Timeline />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
