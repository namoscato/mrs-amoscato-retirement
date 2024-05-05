import { CSSProperties, ReactNode, createElement } from "react";

interface Props {
  component: "h1" | "h2" | "h3";
  children: ReactNode;
  cutout?: number;
  jumble?: number;
  stagger?: number;
  className?: string;
}

/**
 * @see https://otherwherecollective.com/pickllle/
 */
export const PickllleHeading = ({
  component,
  children,
  cutout = 100,
  jumble = 100,
  stagger = 100,
  className,
}: Props) => {
  const style: CSSProperties = {
    fontVariationSettings: `"COUT" ${cutout}, "JMBL" ${jumble}, "STGR" ${stagger}`,
    fontWeight: "normal",
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
