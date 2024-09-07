import Header from "./components/Header";
import Body from "./components/TabSection";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen text-slate-100 dark:text-slate-800 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-light.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="dark:block hidden"
        />
        <Image
          src="/background-dark.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="dark:hidden block"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80 z-10 dark:from-white dark:to-white"></div>
      <div className="relative z-20 mx-auto flex flex-col min-h-screen max-w-screen-2xl">
        <Header />
        <main className="flex-grow">
          <Body />
        </main>
        <Footer />
      </div>
    </div>
  );
}
