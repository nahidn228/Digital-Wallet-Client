import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";




  const faqs = [
    // Fees & Charges
    {
      question: "Are there any fees for sending money?",
      answer: "Person-to-person transfers are usually free.",
    },
    {
      question: "Does cash-out have extra charges?",
      answer:
        "Yes, cash-out to bank accounts or agents may include a small service fee.",
    },
    {
      question: "Are there hidden costs?",
      answer:
        "No. All fees are clearly shown before you confirm a transaction.",
    },
  ];


const ChargeFaq = () => {



   const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleFAQ = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };

  return (
     <div className="max-w-2xl mx-auto mt-10 p-4">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-center pb-10">
            Fees & Charges
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

export default ChargeFaq;
