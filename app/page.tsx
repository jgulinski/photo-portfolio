import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Header from "./components/Header";
import TabSection from "./components/TabSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/background-black.JPG')] bg-cover bg-fixed text-white">
      <div className="mx-auto flex flex-col min-h-screen max-w-screen-2xl backdrop-blur-sm backdrop-brightness-50">
        <Header />
        <main className="flex-grow">
          <TabSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
