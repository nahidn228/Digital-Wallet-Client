import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";


const faqs = [

// Technical Support
{
  question: "What should I do if the app is not working?",
  answer:
    "Restart your device and ensure you have internet. If the issue continues, reinstall the app or contact support.",
},
{
  question: "How do I update my wallet app?",
  answer:
    "Visit the Google Play Store or Apple App Store and update to the latest version.",
},
{
  question: "How can I contact customer support?",
  answer:
    "You can reach us via in-app live chat, email, or our 24/7 helpline number.",
},
];
const TechnicalFaq = () => {

 const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
     <div className="max-w-2xl mx-auto mt-10 p-4">
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-center pb-10">
        Technical Support
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium     text-base md:text-lg  group-open:text-primary transition-colors"
            >
              {faq.question}
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-4 pb-4 text-muted-foreground"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalFaq;