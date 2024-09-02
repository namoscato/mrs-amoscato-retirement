import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./NavigationIconButton.module.scss";

interface Props {
  children: ReactNode;
  title: string;
  onClick: () => void;
  className?: string;
}

export const NavigationIconButton = ({
  children,
  title,
  onClick,
  className,
}: Props) => {
  return (
    <button
      className={clsx(styles.root, className)}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};
