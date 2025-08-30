import Logo from "@/assets/icon/Logo";
import { Button } from "@/components/ui/button";
import walletImage from "@/assets/image/tree-grows-coin.jpg";
import dollarImage from "@/assets/image/doller.jpg";

import CountUp from "react-countup";
import { lazy } from "react";
interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: number;
  }>;
}

const defaultCompanies = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
    alt: "Arc",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
    alt: "Description",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
    alt: "Mercury",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
    alt: "Ramp",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
    alt: "Retool",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
    alt: "Watershed",
  },
];

const defaultAchievements = [
  { label: "Companies Supported", value: 300 },
  { label: "Projects Finalized", value: 800 },
  { label: "Happy Customers", value: 99 },
  { label: "Recognized Awards", value: 10 },
];

const TeamSection = lazy(() => import("./TeamSection"));
const WhyWork = lazy(() => import("../HomePage/WhyWork"));
const WhyChoose = lazy(() => import("../HomePage/WhyChoose"));

const AboutSection = ({
  title = "About Us",
  description = "Empowering your finances with secure, fast, and smart digital solutions. Our mission is to make money management simple, transparent, and accessible for everyone.",
  mainImage = {
    src: walletImage,
    alt: "placeholder",
  },
  secondaryImage = {
    src: dollarImage,
    alt: "placeholder",
  },
  breakout = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "logo",
    title: "Millions of Users Trust D.Wallet",
    description:
      "Empowering individuals and businesses with fast, secure, and reliable digital wallet solutions that simplify payments and financial management.",
    buttonText: "Discover more",
    buttonUrl: "https://shadcnblocks.com",
  },
  companiesTitle = "Valued by clients worldwide",
  companies = defaultCompanies,
  achievementsTitle = "Our Achievements in Numbers",
  achievementsDescription = "Delivering seamless digital payments, empowering thousands of users, and driving financial efficiency across every transaction.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="w-full flex flex-col items-center ">
          <div className="mb-14 grid gap-5 text-center max-w-2xl ">
            <h1 className="text-5xl font-bold tracking-tight">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <Logo />
              <div>
                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto" asChild>
                <a href={breakout.buttonUrl} target="_blank">
                  {breakout.buttonText}
                </a>
              </Button>
            </div>
            <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>

        <div>
          <TeamSection />
        </div>

        {/* Company */}
        <div className="py-32 ">
          <p className="text-center font-medium text-3xl lg:text-4xl">
            {companiesTitle}{" "}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8 bg-primary/70 rounded-xl">
            {companies.map((company, idx) => (
              <div
                className="flex items-center gap-3 py-4"
                key={company.src + idx}
              >
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-6 w-auto md:h-8 "
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" px-10 md:px-16">
          <WhyWork />
        </div>
        <div className=" px-10 md:px-16">
          <WhyChoose />
        </div>

        {/* Achievement */}
        <div className="relative overflow-hidden rounded-xl bg-muted p-10  md:p-16 ">
          <div className="w-full flex flex-col items-center pb-6">
            <div className="flex flex-col gap-4 text-center ">
              <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
              <p className="max-w-xl text-muted-foreground">
                {achievementsDescription}
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p className="text-primary/90 font-medium">{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl">
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2.5}
                    suffix={item.label === "Happy Customers" ? "%" : "+"}
                  />
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
