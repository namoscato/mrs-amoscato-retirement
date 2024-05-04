import { Cover } from "./Cover";
import { Yearbook, studentsFromImageDir } from "./Yearbook";

export default async function Home() {
  const students = await studentsFromImageDir("images");

  return (
    <main>
      <Cover />
      <Yearbook students={students} />
    </main>
  );
}
