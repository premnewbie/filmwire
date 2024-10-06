/* eslint-disable react/prop-types */
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="rounded w-60  p-0" key={imdbID}>
      <div className="">
        <p className="m-1 relative top-10 z-10 p-0 text-[#eab308] font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} className="rounded-tl rounded-tr p-0 blockssss w-full h-80 object-cover" />
      </div>

      <div className="relative z-10 flex flex-col justify-center bottom-10 bg-gray-500 font-mono font-bold rounded-b pl-2 min-h-20">
        <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8) text-amber-400">{Type}</span>
        <h3 className="m-0 text-white">{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;