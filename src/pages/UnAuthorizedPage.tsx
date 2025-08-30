import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";


const UnAuthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-destructive mb-4 animate-pulse">
          🚫
        </h1>
        <h2 className="text-4xl font-bold text-destructive mb-6">
          Unauthorized Access
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          You don’t have permission to view this page. Please contact your
          administrator if you believe this is a mistake.
        </p>
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

export default UnAuthorizedPage;
