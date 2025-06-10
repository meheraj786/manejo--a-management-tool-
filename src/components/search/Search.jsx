import React, { useContext } from 'react'
import { AllContext } from '../../context/AllContext';

const Search = () => {
  const {search,setSearch,searchHandler,setSearchBoard   }= useContext(AllContext)



  return (
            <div className="search flex relative w-[20%] mx-auto justify-center gap-x-2 mt-5">
          <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value);
          searchHandler()

          }} placeholder="Search Your Board" className="!bg-transparent !border-b !w-auto !border-gray-500"/>
        <span onClick={()=>(
  setSearchBoard(null),
  setSearch("")
)} className="px-2 absolute lg:right-2 -right-18 top-1/2 -translate-y-1/2"><MdOutlineClear />

</span>
        </div>
  )
}

export default Search