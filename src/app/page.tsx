import Link from "next/link";

export default function HomePage() {
  return (
    <header>
      Read <Link href="/notes"> this page!</Link>
    </header>
  );
}
