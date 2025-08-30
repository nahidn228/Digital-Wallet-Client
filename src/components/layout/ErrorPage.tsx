
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

interface ErrorPageProps {
  title?: string;
  message?: string;
  code?: string;
}

const ErrorPage = ({
  title = "Something Went Wrong",
  message = "Oops! The page you are looking for does not exist or an unexpected error occurred.",
  code = "404",
}: ErrorPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-destructive mb-4 animate-pulse">
          {code}
        </h1>
        <h2 className="text-4xl font-bold text-destructive mb-6">{title}</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">{message}</p>
        <div className="flex justify-center gap-4">
          <Button
            variant="default"
            onClick={() => navigate("/")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Go Home
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/contact")}
            className="text-primary hover:bg-primary/10"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
