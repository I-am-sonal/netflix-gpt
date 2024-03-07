import React from "react";

const VideoTitle = ({ title, year, poster }) => {
  return (
    <div
      className="text-white p-10 w-full h-auto relative bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${poster})`,
      }}
    >
      <h1 className="font-bold text-4xl text-white"> {title}</h1>
      <h2 className="font-bold text-4xl  text-white"> {year}</h2>
      <button className="border-black border-solid bg-white text-black p-2 mr-2 rounded-lg">
        Play
      </button>
      <button className="border-black border-solid bg-white text-black p-2 rounded-lg">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
