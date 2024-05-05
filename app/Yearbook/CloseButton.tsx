import styles from "./CloseButton.module.scss";

interface Props {
  onClick: () => void;
}

export const CloseButton = ({ onClick }: Props) => {
  return (
    <button className={styles.root} onClick={onClick} title="Close [ESC]">
      X
    </button>
  );
};
