import Movies from './Components/Movies';
import Favorites from './Components/Favorites';
import MovieDetail from './MovieDetail';
import {Route, Routes} from 'react-router-dom';

function MovieRoutes(){

    return(<>
    <Routes>
        <Route path={'/'} element={<Movies />} />
        <Route path={`/:movie/:page?`} element={<Movies />} />
        <Route path={`/:movie/:page/:movieId/:movieName`} element={<MovieDetail />}/>
        <Route path='/favorites' element={<Favorites />}/>
    </Routes>
    </>)
}

export default MovieRoutes;