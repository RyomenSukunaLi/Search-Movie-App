import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MoviesGrid from "./MoviesGrid";

function Movies() {
  const {movie, page} = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [movieCards, setMovieCards] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const defaultSearch = 'marvel';

  useEffect(() => {
    const searchTerm = movie || defaultSearch;
    const pageNumber = page ? page.slice(5) : 1;
    setCurrentPage(pageNumber);

    const fetchData = async () => {
      
      const res = await fetch(
        `https://www.omdbapi.com/?i=tt4154796&apikey=5a42856b&s=${searchTerm}&page=${pageNumber}`
      );
      const data = await res.json();
      console.log(data);
      const totalPages = Math.ceil(data.totalResults / 10);
      setTotalPages(totalPages);
      setMovieCards(data.Search);
    };
    fetchData();

  }, [movie, page]);

  return (
    <>
      <MoviesGrid
        movieCards={movieCards}
        totalPages={totalPages}
        movieName={movie}
        defaultSearch={defaultSearch}
        currentPage={currentPage}
      />
    </>
  );
}

export default Movies;
