import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { NavLink } from "react-router-dom";

function MoviesGrid(props) {
  const { movieCards, movieName, totalPages, currentPage, defaultSearch } =
    props;

  const [favMovies, setFavMovies] = useState(() => {
    return JSON.parse(localStorage.getItem('favMovies')) || []
  });
  useEffect(() => {
    localStorage.setItem('favMovies', JSON.stringify(favMovies))
  }, [favMovies])

  const handleFav = (id) => {
    setFavMovies(prev => prev.includes(id) ? 
    prev.filter(fav => fav !== id) 
    : [...prev, id])
    }
  return (
    <>
      <div className="px-10 flex items-center flex-col">
        <div className="text-white py-3 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6 w-full max-w-screen">
          {movieCards ? (
            movieCards.map((movieCard, index) => {
              const isFavorite = favMovies.includes(movieCard.imdbID);
              return <NavLink
                to={`/${movieName || defaultSearch}z/page=${currentPage}
                /id=${movieCard.imdbID}/${movieCard.Title}`}
                key={index}
              >
                <div className="relative rounded-2xl flex w-full flex-col overflow-hidden hover:scale-102 transition-all duration-200 cursor-pointer">
                  <button
                    className="absolute right-3 top-3  rounded-full cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleFav(movieCard.imdbID);
                    }}
                  >
                    <Heart
                      size={20}
                      color={isFavorite ? "" : "#9CA3AF"}
                      fill={isFavorite ? "red" : "none"}
                    />
                  </button>
                  <img src={movieCard.Poster} className="h-72 object-cover" />
                  <div className="p-3 flex flex-col gap-2 bg-[rgb(31,41,55)]">
                    <h1 className="font-bold text-xl line-clamp-1">
                      {movieCard.Title}
                    </h1>
                    <p className="text-[rgb(204,204,204)] text-sm">
                      {movieCard.Year}
                    </p>
                    <p className="line-clamp-1 text-md">
                      {movieCard.Title} - {movieCard.Type} - {movieCard.Year}
                    </p>
                  </div>
                </div>
              </NavLink>
            })
          ) : (
            <h1 className="font-bold text-2xl">Results Not Found</h1>
          )}
        </div>
        <Pagination
          totalPages={totalPages}
          movieName={movieName}
          defaultSearch={defaultSearch}
        />
      </div>
    </>
  );
}

export default MoviesGrid;
