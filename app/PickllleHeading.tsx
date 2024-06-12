import { CSSProperties, ReactNode, createElement } from "react";

interface Props extends Partial<FontVariationSettings> {
  component: Component;
  children: ReactNode;
  className?: string;
}

/**
 * @see https://otherwherecollective.com/pickllle/
 */
export const PickllleHeading = ({
  component,
  children,
  cutout,
  jumble,
  stagger,
  className,
}: Props) => {
  const defaultSettings = defaultFontSettingsFromComponent(component);
  const style: CSSProperties = {
    fontVariationSettings: `"COUT" ${cutout ?? defaultSettings.cutout}, "JMBL" ${jumble ?? defaultSettings.jumble}, "STGR" ${stagger ?? defaultSettings.stagger}`,
  };

  return createElement(
    component,
    {
      className,
      style,
    },
    children,
  );
};

type Component = "h1" | "h2" | "h3";

interface FontVariationSettings {
  cutout: number;
  jumble: number;
  stagger: number;
}

function defaultFontSettingsFromComponent(
  component: Component,
): FontVariationSettings {
  switch (component) {
    case "h1":
      return { cutout: 200, jumble: 150, stagger: 200 };
    case "h2":
      return { cutout: 200, jumble: 150, stagger: 200 };
    default:
      return { cutout: 100, jumble: 100, stagger: 100 };
  }
}
