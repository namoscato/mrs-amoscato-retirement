import { CSSProperties, ReactNode } from "react";
import styles from "./IconButton.module.scss";

interface Props {
  children: ReactNode;
  onClick: () => void;
  title?: string;
  jumble?: number;
}

export const IconButton = ({
  children,
  onClick,
  title,
  jumble = 300,
}: Props) => {
  const style: CSSProperties = {
    fontVariationSettings: `"COUT" 200, "JMBL" ${jumble}, "STGR" 100`,
  };

  return (
    <button
      className={styles.root}
      onClick={onClick}
      title={title}
      style={style}
    >
      {children}
    </button>
  );
};
