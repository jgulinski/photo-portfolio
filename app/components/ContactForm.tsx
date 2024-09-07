import { useState } from "react";
import {
  Dialog,
  Transition,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";

export default function ContactForm({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-80 dark:bg-white dark:bg-opacity-80" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-stone-800 dark:bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-3xl font-bold mb-6 text-center text-slate-100 dark:text-stone-800"
                >
                  Get in Touch
                </DialogTitle>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 bg-stone-800 dark:bg-gray-100 border border-stone-700 dark:border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-black text-white dark:text-black"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 bg-stone-800 dark:bg-gray-100 border border-stone-700 dark:border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-black text-white dark:text-black"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2 bg-stone-800 dark:bg-gray-100 border border-stone-700 dark:border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-black text-white dark:text-black"
                      rows={4}
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-2 bg-stone-700 dark:bg-gray-200 text-white dark:text-black rounded-md hover:bg-stone-600 dark:hover:bg-gray-300 transition-colors duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-white dark:bg-black text-stone-900 dark:text-white rounded-md hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-colors duration-300"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
