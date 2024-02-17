"use client";
import { KeyboardEvent, useState } from "react";
import { useRouter } from "next/navigation";
import cn from "classnames";

type Props = {
  shouldToggleOpen?: boolean;
};

const Searchbar = ({ shouldToggleOpen = true }: Props) => {
  const [active, setActive] = useState(shouldToggleOpen ? false : true);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onSearch = () => {
    if (shouldToggleOpen) {
      if (!active) {
        setActive(true);
      } else {
        setActive(false);
        setSearch("");
        if (search.length > 0) {
          router.push(`/search?s=${search}`);
        }
      }
    } else {
      if (search.length > 0) {
        setSearch("");
        router.push(`/search?s=${search}`);
      }
    }
  };

  const onSearchClick = () => onSearch();
  const onEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className={cn("block flex items-center max-w-[24rem]")}>
      <input
        type="search"
        className={cn(
          "relative transition duration-150 block ring-0 bg-white/30 focus:ring-0 rounded-l-full py-1 px-4 outline-0 placeholder:font-normal text-white font-normal origin-left w-full",
          { "scale-x-100 ease-out opacity-1": active },
          { "scale-x-0 ease-in opacity-0 hidden": !active }
        )}
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={onEnterPress}
      />
      <button
        className={cn(
          "relative z-10 w-8 h-8  rounded-r-full ",
          { "bg-white/30": active },
          { "": !active }
        )}
        onClick={onSearchClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5-5m0 0A8 8 0 1 0 5 5a8 8 0 0 0 11 11z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Searchbar;
