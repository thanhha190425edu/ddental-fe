"use client";

import { Suspense } from "react";
import PageLoader from "@/components/app/PageLoader";
import NewsArticlePage from "@/views/NewsArticlePage";

export default function NewsArticleRoute() {
  return (
    <Suspense fallback={<PageLoader />}>
      <NewsArticlePage />
    </Suspense>
  );
}
