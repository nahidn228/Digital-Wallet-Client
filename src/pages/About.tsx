import AboutSection from "@/components/AboutPage/AboutSection";
import { Loader } from "@/components/ui/Loader";
import { useEffect, useState } from "react";

const About = () => {
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
      <AboutSection />
    </div>
  );
};

export default About;
