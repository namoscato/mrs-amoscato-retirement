import styles from "./NavigationButton.module.scss";

interface Props {
  direction: "Previous" | "Next";
  onClick: (() => void) | undefined;
}

export const NavigationButton = ({ direction, onClick }: Props) => {
  const character = "Previous" === direction ? "←" : "→";
  const title = onClick ? `${direction} Student [${character}]` : undefined;

  return (
    <button
      className={styles.root}
      disabled={!onClick}
      onClick={onClick}
      title={title}
    >
      {character}
    </button>
  );
};
