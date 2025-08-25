"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a digital wallet?",
    answer:
      "A digital wallet is an app or online service that securely stores your money and payment methods. You can use it to send, receive, and manage transactions without carrying cash.",
  },
  {
    question: "Is my money safe in the digital wallet?",
    answer:
      "Yes. We use advanced encryption, two-factor authentication (2FA), and fraud monitoring to keep your money and data secure.",
  },
  {
    question: "Can I transfer money to any bank account?",
    answer:
      "Yes. You can send money directly to most Bangladeshi banks and mobile banking services like bKash, Nagad, and Rocket.",
  },
  {
    question: "Are there any fees for transactions?",
    answer:
      "Most wallet-to-wallet transfers are free. Bank transfers and international remittances may include small service charges.",
  },
  {
    question: "What if I forget my wallet PIN?",
    answer:
      "You can reset your PIN using your registered phone number or email. For extra security, we verify your identity before resetting.",
  },
  {
    question: "Can I pay bills using the wallet?",
    answer:
      "Yes. You can pay utility bills, mobile recharge, internet packages, and even shop online using the wallet.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-center pb-10">
        Frequently Asked Questions
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
}
