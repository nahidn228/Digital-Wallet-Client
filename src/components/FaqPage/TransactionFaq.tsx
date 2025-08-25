
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";


  const faqs = [
  
  // Account & Transactions
  {
    question: "How can I add money to my wallet?",
    answer:
      "You can add money through linked bank accounts, debit/credit cards, or mobile banking services.",
  },
  {
    question: "What is the minimum and maximum transaction limit?",
    answer:
      "Minimum: ৳10. Maximum depends on your KYC verification level (usually up to ৳50,000 per day).",
  },
  {
    question: "Can I transfer money to a bank account?",
    answer:
      "Yes, you can transfer directly to any supported bank account.",
  },
  {
    question: "How long does it take for a transaction to complete?",
    answer:
      "Most transactions are instant, but in rare cases, it may take up to 24 hours due to bank processing.",
  },
  {
    question: "Can I cancel a payment after sending?",
    answer:
      "No. Once a payment is successfully sent, it cannot be reversed. Please double-check before sending.",
  },
];

const TransactionFaq = () => {

   const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  return (
     <div className="max-w-2xl mx-auto mt-10 p-4">
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl text-center pb-10">
        Account & Transactions
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

export default TransactionFaq;