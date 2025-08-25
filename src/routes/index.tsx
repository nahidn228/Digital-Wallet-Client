import App from "@/App";

import About from "@/pages/About";
import LoginPage from "@/pages/Authentication/LoginPage";
import RegisterPage from "@/pages/Authentication/Register";
import Contact from "@/pages/Contact";
import Faq from "@/pages/Faq";
import Features from "@/pages/Features";
import HomePage from "@/pages/HomePage";
import Pricing from "@/pages/Pricing";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
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
        Component: LoginPage,
        path: "/login",
      },
      {
        Component: RegisterPage,
        path: "/register",
      },
    ],
  },
]);

export default router;
