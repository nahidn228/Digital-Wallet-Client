import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Info } from "lucide-react";

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

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              className="mt-10 text-lg font-semibold px-6 py-3 rounded-2xl shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 transition-transform duration-300"
              size="lg"
            >
              {button.text}
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent className="rounded-2xl shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <div>
              <AlertDialogHeader className="flex flex-col items-center text-center gap-3">
                <Info className="h-12 w-12 text-red-500 animate-pulse" />
                <AlertDialogTitle className="text-2xl font-bold ">
                  🚧 Feature Unavailable
                </AlertDialogTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  This feature is currently under development. Stay tuned for
                  updates!
                </p>
              </AlertDialogHeader>
            </div>

            <AlertDialogFooter className="flex justify-center">
              <AlertDialogAction className="px-6 py-2 text-lg rounded-xl">
                Got It ✨
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        {/* <Button asChild size="lg" className="mt-10">
          <Link to={button.url}>{button.text}</Link>
        </Button> */}
      </div>
    </section>
  );
};

export default PriceHero;
