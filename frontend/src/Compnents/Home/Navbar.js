import React from "react";
import { BiBellPlus } from "react-icons/bi";

export default function Navbar() {
  return (
    <div className="w-full">
      <div className="bg-gray-200  mx-3 h-16 mt-6 flex items-center rounded-lg px-3">
        <div className="w-4/6 ">
          <form>
            {/* <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >ssssssssssssssssssssss
            Search
          </label> */}
            <div className="relative my-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
        <div className="w-1/6">
          <BiBellPlus className="h-6 w-6 mx-auto" />
        </div>
        <div className="flex w-1.5/6 ">
          <div className="mr-3">
            <img
              alt="Placeholder"
              class="rounded-full h-12"
              src="https://picsum.photos/32/32/?random"
            />
          </div>
          <div className="align-middle">
            <h1 className="font-bold text-black text-sm">Name</h1>
            <h5 className="text-blue-700 text-xs">Relation</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
