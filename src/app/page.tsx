import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
    <h1 className="text-4xl font-bold">Home do site</h1>
    <hr></hr>
    <nav className="mt-6">
      <Link className= 'text-blue-500' href="/portal">Acessar o portal</Link>
    </nav>
    </main>
  );
}
