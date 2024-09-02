import { NavigationIconButton } from "./NavigationIconButton";
import { useNavigationLabel } from "./hooks/useNavigationLabel";

interface Props {
  direction: "Previous" | "Next";
  onClick: () => void;
}

export const NavigationButton = ({ direction, onClick }: Props) => {
  const label = useNavigationLabel(direction);

  return (
    <NavigationIconButton onClick={onClick} title={label.value}>
      {label.character}
    </NavigationIconButton>
  );
};
