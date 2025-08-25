import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  // Usage & Accessibility
  {
    question: "Is this wallet available only in Bangladesh or worldwide?",
    answer:
      "Currently, the wallet is available in Bangladesh. International expansion is coming soon.",
  },
  {
    question: "Can I use the wallet for international payments?",
    answer: "Not yet, but international payments are in our future roadmap.",
  },
  {
    question: "Which banks or cards are supported?",
    answer: "Most major Bangladeshi banks and Visa/MasterCard are supported.",
  },
  {
    question: "Do I need internet access for using the wallet?",
    answer:
      "Yes, you need an internet connection for transactions. Some basic features may be available via USSD for mobile operators.",
  },
];
const UsageFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-center pb-10">
        Usage & Accessibility
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

export default UsageFaq;
