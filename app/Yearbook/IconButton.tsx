import clsx from "clsx";
import { CSSProperties, ReactNode } from "react";
import styles from "./IconButton.module.scss";

interface Props {
  children: ReactNode;
  onClick: () => void;
  title?: string;
  jumble?: number;
  className?: string;
}

export const IconButton = ({
  children,
  onClick,
  title,
  jumble = 300,
  className,
}: Props) => {
  const style: CSSProperties = {
    fontVariationSettings: `"COUT" 200, "JMBL" ${jumble}, "STGR" 100`,
  };

  return (
    <button
      className={clsx(styles.root, className)}
      onClick={onClick}
      title={title}
      style={style}
    >
      {children}
    </button>
  );
};
