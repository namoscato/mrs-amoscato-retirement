import styles from "./NavigationButton.module.scss";
import { useNavigationLabel } from "./hooks/useNavigationLabel";

interface Props {
  direction: "Previous" | "Next";
  onClick: (() => void) | undefined;
}

export const NavigationButton = ({ direction, onClick }: Props) => {
  const label = useNavigationLabel(direction);

  return (
    <button
      className={styles.root}
      disabled={!onClick}
      onClick={onClick}
      title={onClick ? label.value : undefined}
    >
      {label.character}
    </button>
  );
};
