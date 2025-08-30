import {
  BatteryCharging,
  GitPullRequest,
  Layers,
  RadioTower,
  SquareKanban,
  WandSparkles,
} from "lucide-react";

interface Reason {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature43Props {
  heading?: string;
  reasons?: Reason[];
}

const WhyWork = ({
  reasons = [
    {
      title: "Quality",
      description:
        "We deliver top-notch services built with precision and care, ensuring consistent value and trust.",
      icon: <GitPullRequest className="size-6" />,
    },
    {
      title: "Experience",
      description:
        "Years of proven expertise empower us to craft solutions that truly make a lasting impact.",
      icon: <SquareKanban className="size-6" />,
    },
    {
      title: "Support",
      description:
        "Our team is always here for you, providing reliable guidance whenever you need it most.",
      icon: <RadioTower className="size-6" />,
    },
    {
      title: "Innovation",
      description:
        "We embrace new ideas and technologies to create modern, future-ready solutions for you.",
      icon: <WandSparkles className="size-6" />,
    },
    {
      title: "Results",
      description:
        "Driven by goals, we focus on delivering outcomes that bring measurable growth and success.",
      icon: <Layers className="size-6" />,
    },
    {
      title: "Efficiency",
      description:
        "With smart processes and speed, we ensure every task is done seamlessly and effectively.",
      icon: <BatteryCharging className="size-6" />,
    },
  ],
}: Feature43Props) => {
  return (
    <section className="pb-32">
      <div className="container">
        <div className="mb-10 md:mb-20">
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-4xl">
            Why Work With{" "}
            <span className="text-primary font-semibold">D.WALLET</span> ?
          </h2>
        </div>
        <div className="grid gap-10  mx-auto md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div key={i} className="flex flex-col border-2 rounded-2xl p-8 transition-transform transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-5 flex size-12 items-center justify-center rounded-full bg-accent border border-b-primary">
                {reason.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWork;
