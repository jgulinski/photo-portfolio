"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

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
];

export default function TabSection() {
  return (
    <div>
      <TabGroup className="flex flex-col items-center h-full">
        <TabList className="flex items-center gap-12 mt-8">
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
                            ? "text-white border-b-2 border-white"
                            : "text-stone-400"
                        }
                        font-medium tracking-wide hover:text-white
                        transition-colors duration-200
                      `}
                >
                  {tab.display}
                </span>
              )}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="bg-stone-900 bg-opacity-40 h-full w-[95%] max-w-screen-lg p-6 my-8 rounded-lg shadow-lg">
          <TabPanel className="h-full">All Photos</TabPanel>
          <TabPanel className="h-full">Street</TabPanel>
          <TabPanel className="h-full">Nature</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
