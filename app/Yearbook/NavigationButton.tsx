import styles from "./NavigationButton.module.scss";
import { useNavigationLabel } from "./hooks/useNavigationLabel";

interface Props {
  direction: "Previous" | "Next";
  onClick: () => void;
}

export const NavigationButton = ({ direction, onClick }: Props) => {
  const label = useNavigationLabel(direction);

  return (
    <button className={styles.root} onClick={onClick} title={label.value}>
      {label.character}
    </button>
  );
};
