import { Loader } from "@/components/ui/Loader";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types";

import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole[]) => {
  return function AuthWrapper() {
    const { data, isLoading } = useUserInfoQuery(undefined);
    console.log(data);

    if (isLoading) {
      return <Loader />;
    }

    if (!isLoading && !data?.data?.email) {
      return <Navigate to={"/login"} />;
    }
    if (requiredRole && !requiredRole.includes(data.data.role)) {
      return <Navigate to={"/unAuthorized"} />;
    }

    return <Component />;
  };
};
