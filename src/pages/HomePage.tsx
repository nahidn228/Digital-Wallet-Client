import FeaturesSection from "@/components/HomePage/FeaturesSection";
import HeroSection from "@/components/HomePage/HeroSection";
import WhyChoose from "@/components/HomePage/WhyChoose";
import WhyWork from "@/components/HomePage/WhyWork";
import { Loader } from "@/components/ui/Loader";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
