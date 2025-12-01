import { useEffect, useState } from "react";
import MoviesGrid from "./MoviesGrid"; 

function favorites(){
    const [movieCards, setMovieCards] = useState([])
    const [myFavMovies, setMyFavMovies] = useState(() => {
        return JSON.parse(localStorage.getItem('favMovies')) || [];
    });
    useEffect(() => {
        const fetchData = async () => {
            const fetchPromises = await myFavMovies.map((myFavMovie) => {
                return fetch(`http://www.omdbapi.com/?apikey=5a42856b&i=${myFavMovie}&plot=full`)
            })
            const responses = await Promise.all(fetchPromises);
            const jsonResponses = responses.map(res => res.json());
            const data = await Promise.all(jsonResponses);
            setMovieCards(data);
        }
        fetchData();
    }, [myFavMovies])
    return(<>
    <MoviesGrid
        movieCards={movieCards}
        movieName={'favorites'}
        currentPage={1}
    />
    </>)
}

export default favorites;