import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import "sanitize.css";
import "./globals.css";

const pickllleFont = localFont({
  src: "./OCPickllleVARVF.woff2",
});

export const metadata: Metadata = {
  title: "Mrs. Amoscato‘s Legacy",
  robots: "noindex",
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
      color: "#b23d37",
    },
  ],
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#fefefe",
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={pickllleFont.className}>{children}</body>
    </html>
  );
}
