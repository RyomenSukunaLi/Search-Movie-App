import {Search} from 'lucide-react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar(){
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState('');
    const movieSearch = (e) => {
       setSearchValue(e.target.value);
    }
    const handleInput = (e) => {
        if(e.key == 'Enter' && searchValue.trim() !== ''){
            navigate(`/${searchValue}/1`);
        }
    }
    return(<>
    <div className="flex items-center gap-4 border-2 border-[rgb(55,65,81)] bg-[rgb(31,41,55)] px-3 rounded-full w-1/2">
        <button><Search size={20} color='rgb(204,204,204)'/></button>
        <input type="search" value={searchValue} className="border-none outline-none w-full py-4 text-[rgb(204,204,204)]" placeholder='Search for movies...' onChange={movieSearch} onKeyDown={handleInput}/>
    </div>
    </>)
}

export default SearchBar;