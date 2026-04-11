import type { Metadata } from "next";
import { SITE_NAME } from "@/config/branding";
import "@/index.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: SITE_NAME,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
