import clsx from "clsx";
import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import styles from "./PageLayout.module.scss";

interface Props {
  children: ReactNode;
  title: string;
  className?: string;
}

export const PageLayout = ({ children, title, className }: Props) => {
  return (
    <div className={clsx(styles.root, className)}>
      <header className={styles.header}>
        <Navigation />
        <h1 className={styles.title}>{title}</h1>
      </header>
      {children}
    </div>
  );
};
