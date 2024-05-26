import type { StyleName } from "./styleNames";

export interface StyleSource {
  type: "book" | "illustration";
  title: string;
  year: number;
  href: string;
}

const friendsBook: StyleSource = {
  type: "book",
  title: "Friends",
  year: 2013,
  href: "https://eric-carle.com/eric-carle-book-gallery/friends-2013/",
};

const hungryCaterpillarBook: StyleSource = {
  type: "book",
  title: "The Very Hungry Caterpillar",
  year: 1969,
  href: "https://eric-carle.com/eric-carle-book-gallery/the-very-hungry-caterpillar-1969/",
};

const quietCricketBook: StyleSource = {
  type: "book",
  title: "The Very Quiet Cricket",
  year: 1990,
  href: "https://eric-carle.com/eric-carle-book-gallery/the-very-quiet-cricket-1990/",
};

const seeSongBook: StyleSource = {
  type: "book",
  title: "I See a Song",
  year: 1973,
  href: "https://eric-carle.com/eric-carle-book-gallery/i-see-a-song-1973/",
};

const tinySeedBook: StyleSource = {
  type: "book",
  title: "The Tiny Seed",
  year: 1970,
  href: "https://eric-carle.com/eric-carle-book-gallery/the-tiny-seed-1970/",
};

export const styleNameSourceMap: Record<StyleName, StyleSource> = {
  animals: {
    type: "book",
    title: "Animals Animals",
    year: 1989,
    href: "https://eric-carle.com/eric-carle-book-gallery/animals-animals-1989/",
  },
  brown_bear: {
    type: "book",
    title: "Brown Bear, Brown Bear, What Do You See?",
    year: 1967,
    href: "https://eric-carle.com/eric-carle-book-gallery/brown-bear-brown-bear-what-do-you-see/",
  },
  cake: {
    type: "illustration",
    title: "Cake Slice",
    year: 2020,
    href: "https://www.facebook.com/permalink.php?story_fbid=pfbid02P2DuKFwkJ61FXGm7otx9c57FtNq7Hk9ci8wgv98eoFEbhFRQsUGC6h6v3pKNLtFrl&id=78750984937",
  },
  caterpillar_anniversary: {
    type: "illustration",
    title: "50th anniversary sketch",
    year: 2019,
    href: "https://www.facebook.com/permalink.php?story_fbid=1244352129441560&id=78750984937&substory_index=1244352129441560",
  },
  earth_day: {
    type: "illustration",
    title: "Earth Day painting",
    year: 2021,
    href: "https://www.facebook.com/permalink.php?story_fbid=pfbid04NiWsThn5ggCFpzZYwFQ4hx4p23zTr6cn5VnHYWzGDHW2AyCGXm3gNGc2RsaWMW9l&id=78750984937",
  },
  friends: friendsBook,
  friends_stars: friendsBook,
  get_moon: {
    type: "book",
    title: "Papa, Please Get the Moon for Me",
    year: 1986,
    href: "https://eric-carle.com/eric-carle-book-gallery/papa-please-get-the-moon-for-me-1986/",
  },
  grouchy_ladybug: {
    type: "book",
    title: "The Grouchy Ladybug",
    year: 1977,
    href: "https://eric-carle.com/eric-carle-book-gallery/the-grouchy-ladybug-1977/",
  },
  hungry_caterpillar_apple: hungryCaterpillarBook,
  hungry_caterpillar_butterfly: hungryCaterpillarBook,
  huntington_garden: {
    type: "illustration",
    title: "Children’s Garden illustration",
    year: 2004,
    href: "https://www.facebook.com/TheHuntingtonLibrary/posts/in-memory-of-eric-carle-were-sharing-the-original-illustrations-he-created-for-o/10159849922369881/",
  },
  kangaroo_bear: {
    type: "book",
    title: "Does A Kangaroo Have A Mother, Too?",
    year: 2000,
    href: "https://eric-carle.com/eric-carle-book-gallery/does-a-kangaroo-have-a-mother-too-2000/",
  },
  little_baby: {
    type: "book",
    title: "You’re My Little Baby",
    year: 2020,
    href: "https://shop.carlemuseum.org/youre-my-little-baby",
  },
  portrait_butterfly: {
    type: "illustration",
    title: "Self Portrait with Butterfly",
    year: 1988,
    href: "https://www.facebook.com/permalink.php?story_fbid=pfbid0YfGdvhh8D8bFnfWDSL1d5ot9oF8asmE3NxM63TevL952hLi4zP45DSndSFaRFAYLl&id=100044612311474",
  },
  pumpkin: {
    type: "illustration",
    title: "Pumpkin for Fall",
    year: 2020,
    href: "https://www.facebook.com/permalink.php?story_fbid=pfbid0262bsWBTjkvm2XBoWshUmqNZCUN92ncuhHt2y4HRuwSzxWuNTK1bQgoTvbkLuGpgFl&id=78750984937",
  },
  quiet_cricket_moth: quietCricketBook,
  quiet_cricket_sun: quietCricketBook,
  see_song_cover: seeSongBook,
  see_song_flower: seeSongBook,
  see_song_sun: seeSongBook,
  seen_cat: {
    type: "book",
    title: "Have You Seen My Cat?",
    year: 1973,
    href: "https://eric-carle.com/eric-carle-book-gallery/have-you-seen-my-cat-1973/",
  },
  slowly_sloth: {
    type: "book",
    title: "“Slowly, Slowly, Slowly,” said the Sloth",
    year: 2002,
    href: "https://eric-carle.com/eric-carle-book-gallery/slowly-slowly-slowly-said-the-sloth-2002/",
  },
  snow: {
    type: "illustration",
    title: "Holiday snow scene",
    year: 2019,
    href: "https://www.facebook.com/permalink.php?story_fbid=pfbid0h6rqujSymgUWGCeoE5kGwsPkJbZqebRBxHuygM5PAaEPDvA7FBsHh1EU1kYgzxqzl&id=78750984937",
  },
  swatch_blue: {
    type: "illustration",
    title: "blue painted paper",
    year: 2022,
    href: "https://www.facebook.com/permalink.php?story_fbid=pfbid02b3JzKen6EiUU78AK6cn6zRBh5brcEJEdLdwrvrrjEjr6bd6RiLgt5M27EcsdAXV8l&id=100044612311474",
  },
  swatch_green: {
    type: "illustration",
    title: "green painted paper",
    year: 2022,
    href: "https://www.facebook.com/permalink.php?story_fbid=pfbid02b3JzKen6EiUU78AK6cn6zRBh5brcEJEdLdwrvrrjEjr6bd6RiLgt5M27EcsdAXV8l&id=100044612311474",
  },
  swatch_orange: {
    type: "illustration",
    title: "orange painted paper",
    year: 2018,
    href: "https://www.facebook.com/permalink.php?story_fbid=592042262395511&id=78750984937&substory_index=592042262395511",
  },
  swatch_red: {
    type: "illustration",
    title: "red painted paper",
    year: 2022,
    href: "https://www.facebook.com/permalink.php?story_fbid=pfbid02b3JzKen6EiUU78AK6cn6zRBh5brcEJEdLdwrvrrjEjr6bd6RiLgt5M27EcsdAXV8l&id=100044612311474",
  },
  swatch_yellow: {
    type: "illustration",
    title: "yellow painted paper",
    year: 2020,
    href: "https://www.facebook.com/permalink.php?story_fbid=422327409884287&id=78750984937&substory_index=422327409884287",
  },
  tiny_seed_flower: tinySeedBook,
  tiny_seed_sun: tinySeedBook,
  tiny_seed_trees: tinySeedBook,
};
