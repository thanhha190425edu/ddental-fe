"use client";

import { Suspense } from "react";
import PageLoader from "@/components/app/PageLoader";
import ServicesPage from "@/views/ServicesPage";

export default function ServicesRoute() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ServicesPage />
    </Suspense>
  );
}
