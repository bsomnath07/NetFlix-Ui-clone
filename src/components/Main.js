import React, { useState, useEffect } from "react";
import requests from "../Requests";
import axios from "axios";
const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movie);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className="w-full h-[520px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[520px] bg-gradient-to-r"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top=[20%] md:p-6 top-24 left-1/5 transform-translate-[-60%, -60%] ">
          <h1 className="text-3xl font-semibold">{movie?.title}</h1>
          <div className=" my-4">
            {/* <button className="relative border bg-gray-300 text-black py-2 px-5 font-bold ml-1 rounded">
              {" "}
              Play
            </button>
            <button className="border bg-black border-gray-300 text-white py-2 px-5 ml-4 rounded">
              Watch Later
            </button> */}
          </div>
          <p className="text-gray-400 text-sm">
            Released:{movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[35%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 120)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
