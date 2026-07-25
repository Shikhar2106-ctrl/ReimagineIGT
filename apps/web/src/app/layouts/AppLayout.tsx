import { Outlet } from "react-router-dom";

import Header from "@/components/layout/Header";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";

export default function AppLayout() {
  return (
    <SmoothScrollProvider>
      <Header />
      <Outlet />
    </SmoothScrollProvider>
  );
}
