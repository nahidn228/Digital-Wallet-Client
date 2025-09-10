// import AddTour from "@/pages/admin/AddTour";
// import Analytics from "@/pages/admin/Analytics";

// import AddDivision from "@/pages/admin/AddDivision";
// import AddTourType from "@/pages/admin/AddTourType";
// import AllUser from "@/components/modules/admin/AllUser";
// import Analytics from "@/pages/Admin/Analytics";

import type { ISidebarItem } from "@/types";
import { lazy } from "react";


const Analytics = lazy(() => import("@/pages/Admin/Analytics"));
const AllUser = lazy(() => import("@/components/modules/admin/AllUser"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        Component: Analytics,
      },
      {
        title: "All Users",
        url: "/admin/all-users",
        Component: AllUser,
      },
    ],
  },
];
