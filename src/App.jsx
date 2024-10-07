import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import axios from "axios";

const API_URL = "https://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    await axios.get(`${API_URL}&s=${title}`).then(res => setMovies(res.data.Search));
  };

  return (
    <div className="bg-zinc-800 flex flex-col items-center">
      <h1 className="text-orange-300 text-4xl font-bold font-mono text-center">MovieLand</h1>

      <div className="flex flex-1 mt-8 bg-white text-center max-w-96 rounded lg:min-w-96 sm:min-w-64 sm:max-w-full">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
          className="w-full border-r-2 border-x-black rounded-l p-1"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
          width={40} height={40}
          className="p-2"
        />
      </div>

      {movies?.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-10 mt-8">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;