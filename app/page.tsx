import { Yearbook, studentsFromImageDir } from "./Yearbook";

export default async function Home() {
  const students = await studentsFromImageDir("images");

  return (
    <main>
      <Yearbook students={students} />
    </main>
  );
}
