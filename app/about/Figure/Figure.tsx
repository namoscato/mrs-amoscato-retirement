import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./Figure.module.scss";

interface Props {
  children: ReactNode;
  caption: string;
  fullWidth?: boolean;
  bordered?: boolean;
}

export const Figure = ({ children, caption, fullWidth, bordered }: Props) => {
  return (
    <figure className={styles.root}>
      <div>{children}</div>
      <figcaption
        className={clsx(styles.caption, {
          [styles.captionPartialWidth ?? ""]: !fullWidth,
          [styles.captionBordered ?? ""]: bordered,
        })}
      >
        {caption}
      </figcaption>
    </figure>
  );
};
