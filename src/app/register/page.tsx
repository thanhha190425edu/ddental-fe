"use client";

import { Suspense } from "react";
import PageLoader from "@/components/app/PageLoader";
import RegisterPage from "@/views/RegisterPage";

export default function RegisterRoute() {
  return (
    <Suspense fallback={<PageLoader />}>
      <RegisterPage />
    </Suspense>
  );
}
