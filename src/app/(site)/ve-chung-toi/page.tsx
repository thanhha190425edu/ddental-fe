"use client";

import { Suspense } from "react";
import PageLoader from "@/components/app/PageLoader";
import AboutPage from "@/views/AboutPage";

export default function AboutRoute() {
  return (
    <Suspense fallback={<PageLoader />}>
      <AboutPage />
    </Suspense>
  );
}
