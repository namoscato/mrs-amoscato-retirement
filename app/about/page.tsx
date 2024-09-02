import type { Metadata } from "next";
import { About } from "./About";

export const metadata: Metadata = {
  title: "About",
};

export default async function AboutPage() {
  return <About />;
}
