import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star } from 'lucide-react'

function MovieDetail(){
    const movieParams = useParams();
    const movieId = movieParams.movieId;
    const imdbId = movieId.slice(3);
    const [movie, setMovie] = useState({});
    const [Ratings, setRatings] = useState([]);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const res = await fetch(`http://www.omdbapi.com/?apikey=5a42856b&i=${imdbId}&plot=full`)
            const data = await res.json();
            setMovie(data);

            setRatings(data.Ratings);
        }
        fetchMovieDetails();
        
    },[])
    const fields = [
            {label: 'Genre', value: movie.Genre},
            {label: 'Director', value: movie.Director},
            {label: 'Writer', value: movie.Writer},
            {label: 'Actors', value: movie.Actors},
            {label: 'Language', value: movie.Language},
            {label: 'Country', value: movie.Country}
        ]
        
    return(<>
    <div className="text-white flex flex-wrap md:flex-nowrap gap-5 py-5 px-10">
        <div className="rounded-xl overflow-hidden w-full md:w-xl lg:w-96">
            <img src={movie.Poster} className="w-full rounded-xl" alt="Movie Poster" />
        </div>
        <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-bold">{movie.Title}</h1>
            <div className="flex gap-4 items-center">
                <p className="px-4 py-1 bg-red-600 rounded-full">{movie.Year}</p>
                <p className="px-4 py-1 border-white border rounded-full">{movie.Rated}</p>
                <p className="text-[18px] text-gray-400">{movie.Runtime}</p>
            </div>
            <div className="flex flex-wrap gap-6">
                {Ratings.map((rating, index) => (
                    <div className="flex gap-2 items-center" key={index}>
                        <Star color="yellow"/>
                        <p className="text-xl font-bold">{rating.Value}<span className="text-lg font-medium text-gray-400 pl-2">({rating.Source})</span></p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold">Plot</h1>
                <p className="text-lg">{movie.Plot}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-lg">
                {fields.map((field, index) => (
                    <div key={index} className="flex flex-col gap-1">
                        <h1 className="text-xl font-bold">{field.label}</h1>
                        <p>{field.value}</p>
                    </div>
                ))}
                <div className="flex flex-col gap-1 lg:col-span-2 ">
                    <h1 className="text-xl font-bold">Awards</h1>
                    <p>{movie.Awards}</p>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default MovieDetail;