"use client";
import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

export default function Header() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex justify-between items-center h-24 px-8 bg-gradient-to-b from-black to-transparent">
      <div className="text-2xl font-semibold tracking-wide text-slate-100">
        JG Photography
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="rounded-full px-6 py-2 hover:bg-opacity-90 transition-colors duration-300 font-medium bg-slate-100 text-stone-800"
          onClick={() => setShowContactForm(true)}
        >
          Get in touch
        </button>
      </div>
      <ContactForm
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </header>
  );
}
