import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/app/layouts/AppLayout";

import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound/NotFound";
import About from "@/pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
  path: "about",
    element: <About />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);