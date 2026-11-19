
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureStrip from "../components/FeatureStrip";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import IndustriesSection from "../components/IndustriesSection";
import CareersContactSection from "../components/CareersContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeatureStrip />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <CareersContactSection />
      <Footer />
    </main>
  );
}
