import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Header from "./components/Header";
import TabSection from "./components/TabSection";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen text-white relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80 z-10"></div>
      <div className="relative z-20 mx-auto flex flex-col min-h-screen max-w-screen-2xl">
        <Header />
        <main className="flex-grow">
          <TabSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
