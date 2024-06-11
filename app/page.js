import Link from "next/link";

export default function Home() {
  const week = [2, 3, 4];

  const weekLink = week.map((weekNum) => 
    <li className="p-1.5" key={weekNum}>
      <Link href={`/week-${weekNum}`}>Week {weekNum} Assignment</Link>
    </li>
  );
  return (
    <main>
      <div>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <ul>
          {weekLink}
        </ul>
    </div>
    </main>
  );
}
