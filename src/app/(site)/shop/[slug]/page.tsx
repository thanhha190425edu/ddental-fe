"use client";

import { Suspense } from "react";
import PageLoader from "@/components/app/PageLoader";
import ShopCategory from "@/views/ShopCategory";

export default function ShopCategoryRoute() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ShopCategory />
    </Suspense>
  );
}
