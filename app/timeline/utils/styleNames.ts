export const styleNames = [
  "animals",
  "brown_bear",
  "cake",
  "caterpillar_anniversary",
  "earth_day",
  "friends",
  "friends_stars",
  "get_moon",
  "grouchy_ladybug",
  "hungry_caterpillar_apple",
  "hungry_caterpillar_butterfly",
  "huntington_garden",
  "kangaroo_bear",
  "little_baby",
  "portrait_butterfly",
  "pumpkin",
  "quiet_cricket_moth",
  "quiet_cricket_sun",
  "see_song_cover",
  "see_song_flower",
  "see_song_sun",
  "seen_cat",
  "slowly_sloth",
  "snow",
  "swatch_blue",
  "swatch_green",
  "swatch_orange",
  "swatch_red",
  "swatch_yellow",
  "tiny_seed_flower",
  "tiny_seed_sun",
  "tiny_seed_trees",
] as const;

export type StyleName = (typeof styleNames)[number];

export function isStyleName(value: string): value is StyleName {
  return styleNames.includes(value as StyleName);
}
