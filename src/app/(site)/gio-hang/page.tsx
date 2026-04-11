"use client";

import { Suspense } from "react";
import PageLoader from "@/components/app/PageLoader";
import CartPage from "@/views/CartPage";

export default function CartRoute() {
  return (
    <Suspense fallback={<PageLoader />}>
      <CartPage />
    </Suspense>
  );
}
