import type { Metadata } from "next";
import { Timeline } from "./Timeline";

export const metadata: Metadata = {
  title: "Timeline",
};

export default function TimelinePage() {
  return <Timeline />;
}
