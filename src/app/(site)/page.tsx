"use client";

import { Suspense } from "react";
import PageLoader from "@/components/app/PageLoader";
import Home from "@/views/Home";

export default function HomeRoute() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Home />
    </Suspense>
  );
}
