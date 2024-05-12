/* eslint-disable @next/next/no-img-element */

import clsx from "clsx";
import styles from "./StyledPortraitImage.module.scss";
import { useToggleState } from "./hooks/useStyledPortraitImageState";

interface Props {
  className: string | undefined;
  styleImageSrc: string;
  portraitImageSrc: string;
}

export const StyledPortraitImage = ({
  className,
  styleImageSrc,
  portraitImageSrc,
}: Props) => {
  const { state, toggleState } = useToggleState(portraitImageSrc);

  return (
    <button
      className={clsx(styles.root, className)}
      onClick={toggleState}
      title="Toggle Images [SPACE]"
    >
      <img
        className={clsx(styles.image, styles.styleImage, {
          [styles.imageActive ?? ""]: state,
          [styles.styleImageActive ?? ""]: state,
        })}
        src={styleImageSrc}
        alt="Applied style image"
      />
      <img
        className={clsx(styles.image, styles.portraitImage, {
          [styles.imageActive ?? ""]: !state,
          [styles.portraitImageActive ?? ""]: !state,
        })}
        src={portraitImageSrc}
        alt="Styled student head shot"
      />
    </button>
  );
};
