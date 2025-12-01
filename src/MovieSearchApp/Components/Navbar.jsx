import { Clapperboard } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(<>
    <div className="bg-[rgb(31,41,55)] py-5 px-10 text-white flex justify-between">
        <div className=" flex gap-1 items-center">
            <Clapperboard color="red" />
            <NavLink to={'/marvel'}><h1 className="text-xl font-bold">MoviesFlix</h1></NavLink>
        </div>
        <div className="flex gap-6">
            <NavLink to={'/marvel'} className={({isActive}) => isActive ? 'text-gray-500' : 'text-white hover:text-red-500 transition-all duration-300'}>Home</NavLink>
            <NavLink to={'/favorites'} className={({isActive}) => isActive ? 'text-gray-500' : 'text-white hover:text-red-500 transition-all duration-300'}>Favorites</NavLink>
        </div>
    </div>
    </>)
}

export default Navbar;