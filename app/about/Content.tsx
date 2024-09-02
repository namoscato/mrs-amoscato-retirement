import { ReactNode } from "react";
import { PickllleHeading } from "../PickllleHeading";
import styles from "./Content.module.scss";

interface Props {
  children: ReactNode;
  title?: string;
}

export const Content = ({ children, title }: Props) => {
  return (
    <div className={styles.root}>
      {title && (
        <PickllleHeading component="h2" className={styles.title}>
          {title}
        </PickllleHeading>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
