"use client";

import React, { useEffect, useState } from "react";
import SearchMenufacturer from "./SearchMenufacturer";
import Image from "next/image";
import { SearchBarProps } from "@/types";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="button" className={`-mt-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className=" object-contain"
    />
  </button>
);

const SearchBar = ({ setManuFacturer, setModel }: SearchBarProps) => {
  const [searchManufacturer, setSearchMenufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacturer.trim() === "" && searchModel.trim() === "")
      return alert("Please provide some input");
    setModel(searchModel);
    setManuFacturer(searchManufacturer);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenufacturer
          selected={searchManufacturer}
          setSelected={setSearchMenufacturer}
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model icon"
          width={25}
          height={25}
          className=" absolute w-[20px] h-[20px] ml-4"
        />

        <input
          type="submit"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
