import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import "sanitize.css";
import "./globals.css";

const pickllleFont = localFont({
  src: "./OCPickllleVARVF.woff2",
});

export const metadata: Metadata = {
  title: "Mrs. Amoscato's Legacy",
  robots: "noindex",
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
