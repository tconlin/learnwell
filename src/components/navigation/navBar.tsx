import { Popover } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className="bg-white shadow-sm data-[open]:fixed data-[open]:inset-0 data-[open]:z-40 data-[open]:overflow-y-auto lg:static lg:overflow-y-visible data-[open]:lg:static data-[open]:lg:overflow-y-visible"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between md:grid md:grid-cols-12">
            <div className="min-w-0 flex-1 md:col-span-4">
              <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                <div className="w-full">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-400"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      type="search"
                      placeholder="Search"
                      className="block w-full rounded-full border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:col-span-4 m-auto">
              <div className="flex flex-shrink-0 items-center">
                <Link href="#">
                  <Image
                    src={"/FULL_LOGO_COLOR.png"}
                    alt="learnwell educational videos"
                    width={144}
                    height={144}
                  />
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-end md:col-span-4">
              <Link
                href="#"
                className="ml-6 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                New Project
              </Link>
            </div>
          </div>
        </div>
      </Popover>
    </>
  );
};
