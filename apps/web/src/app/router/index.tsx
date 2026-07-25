import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/app/layouts/AppLayout";

import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound/NotFound";
import About from "@/pages/About/About";
// import Dashboard from "@/pages/Dashboard/Dashboard"
import Contact from "@/pages/Contact/Contact"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      // {
      //   path: "solution",
      //   element: <Solution />,
      // },
      {
        path: "application",
        element: <About />,
      },
      {
        path: "case_studies",
        element: <About />,
      },
      // {
      //   path: "dashboard",
      //   element: <Dashboard />,
      // },
      {
        path: "clients",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
