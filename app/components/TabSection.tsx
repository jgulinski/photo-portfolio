"use client";
import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import PhotoGrid from "./PhotoGrid";

const tabs = [
  {
    key: "all",
    display: "All",
  },
  {
    key: "street",
    display: "Street",
  },
  {
    key: "nature",
    display: "Nature",
  },
  {
    key: "random",
    display: "Random",
  },
];

const photos = [
  { id: 1, src: "/photo1.jpg", alt: "Street photo 1", category: "random" },
  { id: 2, src: "/photo2.jpg", alt: "Street photo 2", category: "nature" },
];

export default function Body() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredPhotos =
    selectedIndex === 0
      ? photos
      : photos.filter((photo) => photo.category === tabs[selectedIndex].key);

  return (
    <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <TabList className="flex items-center gap-12 mt-8 justify-center">
        {tabs.map((tab) => (
          <Tab
            key={tab.key}
            className="p-2 focus:outline-none transition-all duration-300 ease-in-out"
          >
            {({ selected }) => (
              <span
                className={`
                      ${
                        selected
                          ? "text-slate-100 dark:text-stone-800 border-b-2 border-slate-100 dark:border-stone-800"
                          : "text-stone-400 dark:text-stone-600"
                      }
                      font-medium tracking-wide hover:text-white dark:hover:text-black
                      transition-colors duration-200
                    `}
              >
                {tab.display}
              </span>
            )}
          </Tab>
        ))}
      </TabList>
      <TabPanels className="bg-stone-900 bg-opacity-40 dark:bg-slate-100 dark:bg-opacity-40 w-[95%] max-w-screen-lg p-6 my-8 rounded-lg shadow-lg mx-auto">
        <TabPanel>
          <PhotoGrid photos={filteredPhotos} />
        </TabPanel>
        <TabPanel>
          <PhotoGrid photos={filteredPhotos} />
        </TabPanel>
        <TabPanel>
          <PhotoGrid photos={filteredPhotos} />
        </TabPanel>
        <TabPanel>
          <PhotoGrid photos={filteredPhotos} />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
