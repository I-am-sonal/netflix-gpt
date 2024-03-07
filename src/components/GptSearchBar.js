import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import configSlice from "../utils/configSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-2 w-4/12">
      <form action="" className=" m-2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="rounded p-2 mr-2 col-span-9"
        />
        <button className="text-white rounded-lg bg-red-500 p-2 col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
