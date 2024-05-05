import { Yearbook, studentsFromImageDir } from "./Yearbook";

export default async function Home() {
  const students = await studentsFromImageDir("images");

  return <Yearbook students={students} />;
}
