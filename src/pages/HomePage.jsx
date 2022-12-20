import NavbarSection from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import ServiceSection from "../components/section/ServiceSection";
import WhySection from "../components/section/WhySection";
import TestimonialSection from "../components/section/TestimonialSection";
import AdsSection from "../components/section/AdsSection";
import FaqSection from "../components/section/FaqSection";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <>
      <NavbarSection />
      <Hero />
      <ServiceSection />
      <WhySection />
      <TestimonialSection />
      <AdsSection/>
      <FaqSection/>
      <Footer/>
    </>
  );
};

export default HomePage;
