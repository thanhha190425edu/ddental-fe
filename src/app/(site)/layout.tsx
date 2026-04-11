"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import PageLoader from "@/components/app/PageLoader";
import UserNotRegisteredError from "@/components/UserNotRegisteredError";
import { siteAuthSkipped, useSiteAuth } from "@/context/SiteAuthContext";
import { useAuth } from "@/lib/AuthContext";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, ready } = useSiteAuth();
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } =
    useAuth();

  useEffect(() => {
    if (authError?.type === "auth_required") {
      navigateToLogin();
    }
  }, [authError, navigateToLogin]);

  useEffect(() => {
    if (!ready || siteAuthSkipped() || user) return;
    const nextPath = pathname || "/";
    router.replace(`/login?from=${encodeURIComponent(nextPath)}`);
  }, [pathname, ready, router, user]);

  if (isLoadingAuth || isLoadingPublicSettings || !ready) {
    return <PageLoader />;
  }

  if (authError?.type === "user_not_registered") {
    return <UserNotRegisteredError />;
  }

  if (authError?.type === "auth_required") {
    return null;
  }

  if (siteAuthSkipped() || user) {
    return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
  }

  return <PageLoader />;
}
