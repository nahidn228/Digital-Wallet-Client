import {
  Earth,
  Infinity as InfinityIcon,
  LandmarkIcon,
  Map,
  MessagesSquare,
  SendToBack,
 
} from "lucide-react";

const feature = [
  {
    title: "Seamless Transactions",
    description:
      "Send and receive money instantly with just a few taps. Transfer money instantly with just a few taps, making payments quick, reliable, and effortless every time.",
    icon: <SendToBack className="size-6" />, 
  },
  {
    title: "Bank-Level Security",
    description:
      "Advanced encryption keeps your funds safe. Your funds stay protected with advanced encryption, ensuring complete safety and peace of mind.",
    icon: <LandmarkIcon  className="size-6" />,
  },
  {
    title: "Multi-Platform Access",
    description:
      "Enjoy hassle-free access on mobile, web, or desktop — your wallet is always within reach. Use D.Wallet on mobile, web, or desktop hassle-free. ",
    icon: <MessagesSquare className="size-6" />,
  },
  {
    title: "Smart Expense Tracking",
    description:
      "Stay in control with detailed insights that help you manage, monitor, and track your spending. Stay on top of your finances with detailed insights",
    icon: <Map className="size-6" />,
  },
  {
    title: "Global Reach",
    description:
      "Send and receive payments worldwide with ease, breaking borders and bringing people closer. Pay and get paid across borders with ease",
    icon: <Earth className="size-6" />,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our support team is always ready to help you anytime, anywhere.",
    icon: <InfinityIcon className="size-6" />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
           
            <h2 className="text-3xl font-medium md:text-5xl">
              Empowering you with safe, simple, and smart{" "}
              <span className="text-primary ">financial freedom.</span>
            </h2>

            <p className="text-muted-foreground md:max-w-2xl">
              D.Wallet is designed to make digital transactions smarter, faster,
              and more secure. With cutting-edge technology and a user-friendly
              interface, we ensure that managing your finances feels effortless.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
          {feature.map((feature, idx) => (
            <div
              className="flex flex-col justify-between rounded-lg bg-accent p-6 md:min-h-[300px] md:p-8"
              key={idx}
            >
              <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-background">
                {feature.icon}
              </span>
              <div>
                <h3 className="text-lg font-medium md:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
