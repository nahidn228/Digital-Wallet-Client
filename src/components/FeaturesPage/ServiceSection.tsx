"use client";

import { CreditCard, Lock, Zap, BarChart2, Globe, Smartphone } from "lucide-react";

const ServiceSection = () => {
 const services = [
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Instant Money Transfers",
    description:
      "Send and receive funds instantly with a secure, reliable, and seamless experience.",
    items: ["Send Money", "Receive Money", "Transaction History"],
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Secure Wallet Management",
    description:
      "Keep your funds safe with advanced encryption, secure authentication, and backup options.",
    items: ["Two-Factor Authentication", "Wallet Backup", "Account Security"],
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Bill Payments & Top-Ups",
    description:
      "Pay utility bills, recharge mobile phones, and top up accounts directly from your wallet.",
    items: ["Utility Payments", "Mobile Top-Up", "Subscription Payments"],
  },
  {
    icon: <BarChart2 className="h-6 w-6" />,
    title: "Expense Tracking & Analytics",
    description:
      "Visualize your spending, track trends, and make smarter financial decisions.",
    items: ["Spending Reports", "Trend Charts", "Budget Alerts"],
  },
  {
    icon: <Smartphone className="h-6 w-6" />, 
    title: "Multi-Platform Access",
    description:
      "Access your wallet on mobile, web, or desktop with a consistent and seamless experience.",
    items: ["Web Access", "Mobile App", "Desktop App"],
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Payments",
    description:
      "Send and receive money across borders efficiently with minimal fees and maximum transparency.",
    items: ["International Transfers", "Multi-Currency Support", "Low Fees"],
  },
];

  return (
    <section className="pb-32">
      <div className="container">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Services
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
              Comprehensive solutions to manage, send, and receive money securely and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-border space-y-6 rounded-lg border p-8 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full p-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className="bg-foreground h-1.5 w-1.5 rounded-full" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
