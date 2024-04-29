import type { Metadata } from "next";
import type { ReactNode } from "react";

import "sanitize.css";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
