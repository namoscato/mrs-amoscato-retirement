import clsx from "clsx";
import styles from "./Navigation.module.scss";
import { NavigationLink } from "./NavigationLink";

interface Props {
  className?: string;
}

export const Navigation = ({ className }: Props) => {
  return (
    <nav className={clsx(styles.root, className)}>
      <ul className={styles.list}>
        <li>
          <NavigationLink href="/" text="Children" />
        </li>
        <li>
          <NavigationLink href="/timeline" text="Timeline" />
        </li>
        <li>
          <NavigationLink href="/painting" text="Painting" />
        </li>
      </ul>
    </nav>
  );
};
