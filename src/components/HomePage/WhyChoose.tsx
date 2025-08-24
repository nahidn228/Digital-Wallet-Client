import { Timer, Zap, ZoomIn } from "lucide-react";

const WhyChoose = () => {
  return (
    <section className="pb-32">
      <div className="container">
        <p className="mb-4 text-sm text-muted-foreground lg:text-base text-center">
          OUR VALUES
        </p>
        <h2 className="text-3xl font-medium lg:text-4xl text-center">Why Choose Us?</h2>
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
              <Timer className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Performance</h3>
            <p className="leading-7 text-muted-foreground">
              Delivering speed, trust, and smooth service across every interaction, with no delays or hidden issues. Choose a platform that never slows down when you need it most, ensuring success.
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
              <ZoomIn className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Quality</h3>
            <p className="leading-7 text-muted-foreground">
              Every feature is crafted with precision, tested for reliability, and built to meet global standards. Enjoy solutions that provide lasting value, accuracy, and excellence at every step forward.
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
              <Zap className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Innovation</h3>
            <p className="leading-7 text-muted-foreground">
              We bring new ideas to life, turning challenges into smarter solutions that keep you ahead always. From modern design to advanced technology, we’re committed to progress with true creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
