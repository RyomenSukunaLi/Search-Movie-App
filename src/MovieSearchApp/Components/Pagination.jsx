import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Pagination(props){
    const {totalPages, movieName, defaultSearch} = props;
    const navigate = useNavigate();

    const [pagesArray, setPagesArray] = useState([]);

    useEffect(() => {
        setPagesArray([]);
        for(let i = 0; i < totalPages; i++){
            setPagesArray(p => [...p, (i + 1)]);
        }
    },[totalPages])
    
    const handlePage = (e) => {
        navigate(`/${movieName || defaultSearch}/page=${(e.target.innerHTML)}`)
    }
    return(<>
    <div className="flex flex-wrap justify-start gap-3 py-4">
            {pagesArray.map((page, index) => (
                <button key={index} className="text-2xl text-white p-3 bg-[rgb(55,65,81)] rounded-lg w-15 cursor-pointer focus:bg-[rgb(82,102,133)] hover:bg-[rgb(82,102,133)] transition-all duration-200" onClick={handlePage}>{page}</button>
            ))}
        </div>
    </>)
}

export default Pagination;