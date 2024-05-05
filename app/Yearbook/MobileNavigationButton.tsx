import styles from "./MobileNavigationButton.module.scss";
import { useNavigationLabel } from "./hooks/useNavigationLabel";

interface Props {
  direction: "Previous" | "Next";
  onClick: (() => void) | undefined;
}

export const MobileNavigationButton = ({ direction, onClick }: Props) => {
  const label = useNavigationLabel(direction);

  return (
    <button
      className={styles.root}
      disabled={!onClick}
      onClick={onClick}
      title={onClick ? label.value : undefined}
    />
  );
};
