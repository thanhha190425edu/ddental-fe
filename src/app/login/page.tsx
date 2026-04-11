"use client";

import { Suspense } from "react";
import PageLoader from "@/components/app/PageLoader";
import LoginPage from "@/views/LoginPage";

export default function LoginRoute() {
  return (
    <Suspense fallback={<PageLoader />}>
      <LoginPage />
    </Suspense>
  );
}
