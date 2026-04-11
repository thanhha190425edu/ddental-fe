"use client";

import { Suspense } from "react";
import PageLoader from "@/components/app/PageLoader";
import ProductDetail from "@/views/ProductDetail";

export default function ProductDetailRoute() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ProductDetail />
    </Suspense>
  );
}
