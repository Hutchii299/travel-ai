"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import NavLink from "./NavLink";
import Searchbar from "./Searchbar";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div className="grid grid-cols-[min-content_1fr] items-center gap-x-4 text-white">
          <Logo />
          <div className="w-full">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex items-center space-x-8">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <NavLink label="Blog" href={"/blog"} />
                <NavLink label="Categories" href={"/categories"} />
                <div className="flex-1">
                  <Searchbar />
                </div>
              </div>
            </div>

            <div className="-mr-2 flex sm:hidden justify-end">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden col-span-2">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <NavLink label="Blog" href={"/blog"} className="text-right" />
              <NavLink
                label="Categories"
                href={"/categories"}
                className="text-right"
              />
              <div className="float-right">
                <Searchbar shouldToggleOpen={false} />
              </div>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
