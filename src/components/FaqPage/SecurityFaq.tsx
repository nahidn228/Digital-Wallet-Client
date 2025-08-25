import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  // Security & Privacy
  {
    question: "Is my money safe in this digital wallet?",
    answer:
      "Yes, your money is completely safe. We use bank-level security, encryption, and secure servers to protect your funds.",
  },
  {
    question: "What happens if I lose my phone or account password?",
    answer:
      "If you lose your phone or password, you can recover your account by verifying your identity through email, SMS, or registered phone number.",
  },
  {
    question: "Does the wallet use encryption for transactions?",
    answer:
      "Yes. Every transaction is encrypted using industry-standard SSL/TLS protocols to prevent unauthorized access.",
  },
  {
    question: "Can I enable two-factor authentication (2FA)?",
    answer:
      "Yes. You can enable 2FA to add an extra layer of protection whenever you log in or make a transaction.",
  },
  {
    question: "How do I report fraud or suspicious activity?",
    answer:
      "Immediately contact our customer support via the app or helpline. We’ll freeze your account temporarily to prevent further loss.",
  },
];
const SecurityFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-center pb-10">
        Security & Privacy
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

export default SecurityFaq;
