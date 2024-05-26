"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavigationLink.module.scss";
import clsx from "clsx";

interface Props {
  href: string;
  text: string;
}

export const NavigationLink = ({ href, text }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(styles.root, {
        [styles.active ?? ""]: href === pathname,
      })}
    >
      {text}
    </Link>
  );
};
