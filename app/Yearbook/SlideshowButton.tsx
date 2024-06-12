import clsx from "clsx";
import { IconButton } from "./IconButton";
import styles from "./SlideshowButton.module.scss";

interface Props {
  isPlaying: boolean;
  onClick: () => void;
}

export const SlideshowButton = ({ isPlaying, onClick }: Props) => {
  const title = isPlaying ? "Pause Slideshow" : "Play Slideshow";
  const character = isPlaying ? "=" : "»";

  return (
    <IconButton onClick={onClick} title={title} jumble={200}>
      <span
        className={clsx(styles.character, {
          [styles.characterPause ?? ""]: isPlaying,
        })}
      >
        {character}
      </span>
    </IconButton>
  );
};
