import React, { useContext, useEffect, } from "react";
import "./App.css";
import { SiGooglecampaignmanager360 } from "react-icons/si";

import Search from "./components/search/Search";
import BoardCreatingForm from "./components/BoardCreating/BoardCreatingForm";
import { AllContext } from "./context/AllContext";
import BoardItem from "./components/BoardItem/BoardItem";



function App() {
  const {boards}= useContext(AllContext)
  
  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]);


  

  return (
    <div className="lg:w-[1320px] w-full p-10 mx-auto bg-[#50428A] min-h-[60vh] mt-10 rounded-2xl px-2 lg:px-5">
      <h1 className="text-center flex items-center justify-center gap-x-3 mb-10">
        Manejo <SiGooglecampaignmanager360 />
      </h1>
<BoardCreatingForm/>
<Search/>
<BoardItem/>
    </div>
  );
}

export default App;
