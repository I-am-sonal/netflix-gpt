import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div className="gpt-search-wrapper">
      <div className="flex justify-center">
        <GptSearchBar />
      </div>
      <div>
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
