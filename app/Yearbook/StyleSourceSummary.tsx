import { MouseEvent } from "react";
import {
  StyleSourceBook,
  StyleSourceIllustration,
  styleNameSourceMap,
} from "./utils/styleNameSourceMap";
import { StyleName } from "./utils/styleNames";

interface Props {
  name: StyleName;
}

export const StyleSourceSummary = ({ name }: Props) => {
  const styleSource = styleNameSourceMap[name];

  return "book" === styleSource.type ? (
    <StyleSourceSummaryBook book={styleSource} />
  ) : (
    <StyleSourceSummaryIllustration illustration={styleSource} />
  );
};

const StyleSourceSummaryBook = ({
  book: { title, year, href },
}: {
  book: StyleSourceBook;
}) => {
  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      Eric Carle&rsquo;s{" "}
      <em>
        <a href={href} target="_blank" onClick={handleClick}>
          {title}
        </a>
      </em>{" "}
      ({year})
    </>
  );
};

const StyleSourceSummaryIllustration = ({
  illustration: { description, year, href },
}: {
  illustration: StyleSourceIllustration;
}) => {
  return (
    <>
      Eric Carle&rsquo;s {year} illustration{" "}
      <a href={href} target="_blank">
        {description}
      </a>
    </>
  );
};
