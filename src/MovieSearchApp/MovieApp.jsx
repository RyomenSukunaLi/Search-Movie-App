import MovieRoutes from './MovieRoutes';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';

function MovieApp(){
    return(<>
        <Navbar />
    <div className="flex text-white gap-10 flex-col items-center py-5">
        <h1 className="text-4xl font-bold">Discover Movies</h1>
        <SearchBar />
    </div>
    <MovieRoutes />
    </>)
}

export default MovieApp;