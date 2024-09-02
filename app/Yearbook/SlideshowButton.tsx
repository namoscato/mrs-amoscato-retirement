import clsx from "clsx";
import { NavigationIconButton } from "./NavigationIconButton";
import styles from "./SlideshowButton.module.scss";

interface Props {
  isPlaying: boolean;
  onClick: () => void;
}

export const SlideshowButton = ({ isPlaying, onClick }: Props) => {
  const title = isPlaying ? "Pause Slideshow" : "Play Slideshow";
  const character = isPlaying ? "=" : "»";

  return (
    <NavigationIconButton
      className={styles.root}
      onClick={onClick}
      title={title}
    >
      <span
        className={clsx(styles.character, {
          [styles.characterPause ?? ""]: isPlaying,
        })}
      >
        {character}
      </span>
    </NavigationIconButton>
  );
};
