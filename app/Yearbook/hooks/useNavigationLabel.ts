interface Result {
  character: string;
  value: string;
}

export function useNavigationLabel(direction: "Previous" | "Next"): Result {
  const character = "Previous" === direction ? "←" : "→";
  const value = `${direction} Student [${character}]`;

  return { character, value };
}
