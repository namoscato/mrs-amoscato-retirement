import { styleNameSourceMap } from "@/app/Yearbook/utils/styleNameSourceMap";
import { StyleName } from "@/app/Yearbook/utils/styleNames";
import { orderBy, sortBy } from "lodash";

export interface SchoolYear {
  year: number;
  role: Role;
  school: School;
  styleName: StyleName;
}

enum Role {
  Kindergarten = "Kindergarten",
  First = "First Grade",
  Second = "Second Grade",
  Third = "Third Grade",
  Art = "Art Specialist",
}

enum School {
  AJMartin = "A.J. Martin Elementary",
  Liestman = "Liestman Elementary",
  Franklin = "Franklin Elementary",
  NewRichmond = "New Richmond Elementary",
  Espe = "Espe Elementary",
  BradfordWoods = "Bradford Woods Elementary",
  StAlexis = "St. Alexis",
}

const schoolYears: Omit<SchoolYear, "styleName">[] = [
  {
    year: 1982,
    role: Role.Kindergarten,
    school: School.AJMartin,
  },
  {
    year: 1983,
    role: Role.Third,
    school: School.Liestman,
  },
  {
    year: 1984,
    role: Role.Art,
    school: School.AJMartin,
  },
  ...yearsFromRange({
    startYear: 1986,
    endYear: 1988,
    role: Role.Kindergarten,
    school: School.NewRichmond,
  }),
  {
    year: 1989,
    role: Role.Second,
    school: School.NewRichmond,
  },
  ...yearsFromRange({
    startYear: 1991,
    endYear: 1992,
    role: Role.Kindergarten,
    school: School.Espe,
  }),
  {
    year: 2002,
    role: Role.Kindergarten,
    school: School.BradfordWoods,
  },
  ...yearsFromRange({
    startYear: 2003,
    endYear: 2004,
    role: Role.Kindergarten,
    school: School.StAlexis,
  }),
  ...yearsFromRange({
    startYear: 2005,
    endYear: 2024,
    role: Role.First,
    school: School.Franklin,
  }),
];

const styleNames = sortBy(Object.entries(styleNameSourceMap), ([, { title }]) =>
  title.toLowerCase().replace(/^(“|the )/, ""),
).map<StyleName>(([name]) => name as StyleName);

export const SCHOOL_YEARS = schoolYears.map<SchoolYear>((schoolYear, index) => {
  const styleName = styleNames[index];

  if (!styleName) {
    throw new Error(`styleNames out of bounds at index ${index}`);
  }

  return {
    ...schoolYear,
    styleName,
  };
});

interface SchoolYearRange extends Omit<SchoolYear, "year" | "styleName"> {
  startYear: number;
  endYear: number;
}

function yearsFromRange({
  startYear,
  endYear,
  ...schoolYear
}: SchoolYearRange): Omit<SchoolYear, "styleName">[] {
  return Array.from(
    { length: 1 + endYear - startYear },
    (_, index) => startYear + index,
  ).map<Omit<SchoolYear, "styleName">>((year) => ({
    ...schoolYear,
    year,
  }));
}
