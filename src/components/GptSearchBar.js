import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import configSlice from "../utils/configSlice";
import openai from "../utils/openai";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = () => {
    // console.log(searchText.current.value);
    // const gptQuery =
    //   "Act as a movie recommendation system and suggest some movies for the query:" +
    //   searchText.current.value +
    //   ". Only give me names of 5 movies, comma separated like the example result given ahead. Example result: Don, Sholey, Golmaal, Koi Mil Gaya, Gadar";
    //Make and API call to GPT API and get the movie results
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: searchText.current.value }],
    //   model: "gpt-3.5-turbo",
    // });
    // const gptResults = "abc, xyz, pqr";
    // console.log(gptResults.split(","));
  };
  return (
    <div className="pt-2 w-full sm:w-4/12">
      <form
        action=""
        className=" m-2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="rounded p-2 mr-2 col-span-9"
        />
        <button
          className="text-white rounded-lg bg-red-500 p-2 col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
