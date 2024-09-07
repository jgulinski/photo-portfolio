import Head from "next/head";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Head>
        <title>Photo Portfolio</title>
      </Head>

      <header className="flex justify-between items-center h-24 px-8 bg-gradient-to-b from-black to-transparent">
        <div className="text-2xl font-semibold tracking-wide">
          Photography Portfolio
        </div>
        <Link
          className="rounded-full bg-white text-stone-800 px-6 py-2 hover:bg-opacity-90 transition-colors duration-300 font-medium"
          href="#"
        >
          Get in touch
        </Link>
      </header>
    </div>
  );
}
