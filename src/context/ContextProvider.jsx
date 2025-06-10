import React, { useState } from 'react'
import { AllContext } from './AllContext';

const ContextProvider = ({children}) => {
  const [boardTitle, setBoardTitle] = useState("");
    const [boards, setBoards] = useState(() => {
      const boards = localStorage.getItem("boards");
      return boards
        ? JSON.parse(boards)
        : [
            {
              id: Date.now() + "",
              title: "My Board",
              todos: [{ id: Date.now() + "", title: "My Task" }],
            },
          ];
    });
    const [searchBoard, setSearchBoard]= useState(null)
    const [search, setSearch]= useState("")
    const [addTodoMode, setAddTodoMode] = useState(false);
    const [todoAddBoard, setTodoAddBoard] = useState(null);
    const [todoTitle, setTodoTitle] = useState("");

    const value={
      boardTitle,
      setBoardTitle,
      boards,
      setBoards,
      searchBoard,
      setSearchBoard,
      search,
      setSearch,
      addTodoMode,
      setAddTodoMode,
      todoAddBoard,
      setTodoAddBoard,
      todoTitle,
      setTodoTitle
    }








  return (
    <AllContext.Provider value={value}>
      {children}
    </AllContext.Provider>
  )
}

export default ContextProvider