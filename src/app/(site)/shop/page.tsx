"use client";

import { Suspense } from "react";
import PageLoader from "@/components/app/PageLoader";
import ShopCategory from "@/views/ShopCategory";

export default function ShopRoute() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ShopCategory />
    </Suspense>
  );
}
