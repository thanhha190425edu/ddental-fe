"use client";

import { Suspense } from "react";
import PageLoader from "@/components/app/PageLoader";
import NewsPage from "@/views/NewsPage";

export default function NewsRoute() {
  return (
    <Suspense fallback={<PageLoader />}>
      <NewsPage />
    </Suspense>
  );
}
