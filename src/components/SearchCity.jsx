import React,{useState} from 'react'
import { FcSearch } from "react-icons/fc";

const SearchCity = () => {

    const [search , setSearch] = useState("");


  return (
    <div className='w-[12rem] h-[2.5rem]'>
         <div className="relative w-full h-full">
          <input
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Salon ara..."
            className="bg-gray-600 rounded-md text-white w-full h-full pl-10"
          />
          <FcSearch className="absolute left-1 top-[13%]" size={25} />
        </div>
    </div>
  )
}

export default SearchCity