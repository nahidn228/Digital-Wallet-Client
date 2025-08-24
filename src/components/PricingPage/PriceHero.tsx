
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface Hero7Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  reviews?: {
    count: number;
    rating?: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
}

const PriceHero = ({
  heading = "Flexible Plans for Every User",
  description = "Choose a plan that fits your needs. Transparent pricing, no hidden fees, and all the features you need to manage your money efficiently.",
  button = {
    text: "Start Free Trial",
    url: "https://www.shadcnblocks.com",
  },
  
}: Hero7Props) => {
  return (
    <section className="py-32">
      <div className="container text-center">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-5xl">{heading}</h1>
          <p className="text-muted-foreground text-balance lg:text-lg">
            {description}
          </p>
        </div>
        <Button asChild size="lg" className="mt-10">
          <Link to={button.url}>{button.text}</Link>
        </Button>
       
      </div>
    </section>
  );
};

export default PriceHero;
