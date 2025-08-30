import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { role } from "@/constants/role";

import About from "@/pages/About";
import LoginPage from "@/pages/Authentication/LoginPage";
import RegisterPage from "@/pages/Authentication/Register";
import Contact from "@/pages/Contact";
import Fail from "@/pages/Fail";
import Faq from "@/pages/Faq";
import Features from "@/pages/Features";
import HomePage from "@/pages/HomePage";
import Pricing from "@/pages/Pricing";

import Verify from "@/pages/Verify";
import type { TRole } from "@/types";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";

import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import ProfilePage from "@/pages/ProfilePage";
import { UpdateProfileForm } from "@/components/modules/user/UpdateProfileForm";
import PageTransition from "@/components/PageTransition";
import ErrorPage from "@/components/layout/ErrorPage";
import UnAuthorizedPage from "@/pages/UnAuthorizedPage";

const allRoles: TRole[] = ["Agent", "Admin", "User"];

const router = createBrowserRouter([
  {
    Component: App,
    errorElement: <ErrorPage />,
    path: "/",
    children: [
      {
        element: <PageTransition />,
        children: [
          {
            index: true,
            Component: HomePage,
          },
          {
            Component: About,
            path: "about",
          },
          {
            Component: Features,
            path: "features",
          },
          {
            Component: Pricing,
            path: "pricing",
          },
          {
            Component: Contact,
            path: "contact",
          },
          {
            Component: Faq,
            path: "faq",
          },
          {
            Component: withAuth(ProfilePage),
            path: "/profile",
          },
          {
            Component: UpdateProfileForm,
            path: "/editProfile",
          },
          {
            Component: LoginPage,
            path: "/login",
          },
          {
            Component: RegisterPage,
            path: "/register",
          },
        ],
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, [role.admin] as TRole[]),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to={"/admin/analytics"} /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, allRoles as TRole[]),
    path: "/user",

    children: [
      { index: true, element: <Navigate to={"/user/trans-history"} /> },
      ...generateRoutes(userSidebarItems),
    ],
  },

  {
    Component: Verify,
    path: "/verify",
  },
  {
    Component: UnAuthorizedPage,
    path: "/unAuthorized",
  },

  {
    Component: Fail,
    path: "/payment/fail",
  },
]);

export default router;
