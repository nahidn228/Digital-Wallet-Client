import FeaturesSection from "@/components/HomePage/FeaturesSection";
import HeroSection from "@/components/HomePage/HeroSection";
import WhyChoose from "@/components/HomePage/WhyChoose";
import WhyWork from "@/components/HomePage/WhyWork";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <WhyWork />
      <WhyChoose />
    </div>
  );
};

export default HomePage;
