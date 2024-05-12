import clsx from "clsx";
import styles from "./StyleSourceSummary.module.css";
import { styleNameSourceMap } from "./utils/styleNameSourceMap";
import { StyleName } from "./utils/styleNames";

interface Props {
  name: StyleName;
}

export const StyleSourceSummary = ({ name }: Props) => {
  const { type, title, year, href } = styleNameSourceMap[name];

  return (
    <>
      Eric Carle&rsquo;s{" "}
      <a
        href={href}
        target="_blank"
        className={clsx({ [styles.bookTitle ?? ""]: "book" === type })}
      >
        {title}
      </a>{" "}
      ({year})
    </>
  );
};
