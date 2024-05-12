import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import "sanitize.css";
import "./globals.css";

const pickllleFont = localFont({
  src: "./OCPickllleVARVF.woff2",
});

export const metadata: Metadata = {
  title: "Mrs. Amoscato’s Education Legacy",
  description: "32 years of imagining, creating, and learning.",
  metadataBase: maybeGetMetadataBase(),
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

/**
 * Return the `metadataBase` value in production.
 *
 * Leverages new `VERCEL_PROJECT_PRODUCTION_URL` system environment variable, mimicking
 * unreleased v14.3.0 behavior.
 *
 * @see https://github.com/vercel/next.js/pull/65089
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#default-value
 */
function maybeGetMetadataBase(): URL | undefined {
  if ("production" !== process.env.VERCEL_ENV) {
    return undefined;
  }

  const origin = process.env.VERCEL_PROJECT_PRODUCTION_URL;

  return origin ? new URL(`https://${origin}`) : undefined;
}
