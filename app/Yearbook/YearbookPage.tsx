/* eslint-disable @next/next/no-img-element */

import { PickllleHeading } from "../PickllleHeading";
import { schoolYearFromYear } from "../utils/schoolYearFromYear";
import { IconButton } from "./IconButton";
import { MobileNavigationButton } from "./MobileNavigationButton";
import { NavigationButton } from "./NavigationButton";
import { SlideshowButton } from "./SlideshowButton";
import { StyleSourceSummary } from "./StyleSourceSummary";
import { StyledPortraitImage } from "./StyledPortraitImage";
import styles from "./YearbookPage.module.scss";
import { useDisableScroll } from "./hooks/useDisableScroll";
import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation";
import { Student } from "./utils/studentsFromImageDir";

interface Props {
  student: Student;
  onPrevious: () => void;
  onNext: () => void;
  onClose: () => void;
  isPlayingSlideshow: boolean;
  onToggleSlideshow: () => void;
}

export const YearbookPage = ({
  student,
  onPrevious,
  onNext,
  onClose,
  isPlayingSlideshow,
  onToggleSlideshow,
}: Props) => {
  useDisableScroll();
  useKeyboardNavigation({ onNext, onPrevious, onClose });

  return (
    <div className={styles.root}>
      <img
        className={styles.backgroundImage}
        src={student.portraitImage.styledSrc}
        alt="Blurred background accent"
      />
      <div className={styles.container}>
        <figure className={styles.figure}>
          <div className={styles.portrait}>
            <img
              className={styles.portraitImage}
              src={student.portraitImage.src}
              alt="Student portrait"
            />
          </div>
          <figcaption className={styles.figcaption}>
            <StyledPortraitImage
              className={styles.styledPortraitImage}
              styleImageSrc={student.styleImage.src}
              portraitImageSrc={student.portraitImage.styledSrc}
            />
            <div className={styles.caption}>
              <div className={styles.navigationButtons}>
                <NavigationButton direction="Previous" onClick={onPrevious} />
                <NavigationButton direction="Next" onClick={onNext} />
                <SlideshowButton
                  isPlaying={isPlayingSlideshow}
                  onClick={onToggleSlideshow}
                />
              </div>
              <PickllleHeading component="h2">
                {student.school} School
              </PickllleHeading>
              <PickllleHeading component="h1">
                {schoolYearFromYear(student.year)} School Year
              </PickllleHeading>
              <p>
                styled via <StyleSourceSummary name={student.styleImage.name} />
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className={styles.mobileNavigation}>
        <MobileNavigationButton direction="Previous" onClick={onPrevious} />
        <MobileNavigationButton direction="Next" onClick={onNext} />
      </div>
      <IconButton
        onClick={onClose}
        title="Close [ESC]"
        className={styles.closeButton}
      >
        ×
      </IconButton>
    </div>
  );
};
