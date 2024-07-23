import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Img } from "@/components/elements/image";
import { Button } from "@/components/elements/buttons/action";
import { ButtonTypes } from "@/types";
import { useRouter } from "next/router";

export const NavBar = () => {
  const router = useRouter();
  return (
    <div className="bg-white shadow-sm static lg:overflow-y-visible mb-4">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative flex justify-between">
          <div className="flex static">
            <div
              className="flex flex-shrink-0 items-center cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Img source={"/FULL_LOGO_COLOR.png"} height={144} width={144} />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center px-6 py-4">
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
                    className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Button text="Upload" buttonType={ButtonTypes.PRIMARY} />
          </div>
        </div>
      </div>
    </div>
  );
};
