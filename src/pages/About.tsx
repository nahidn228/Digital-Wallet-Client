import AboutSection from "@/components/AboutPage/AboutSection";
import { Loader } from "@/components/ui/Loader";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      className="w-full"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <AboutSection />
    </motion.div>
  );
};

export default About;
