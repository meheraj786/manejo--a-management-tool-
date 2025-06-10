import React, { useState } from 'react'
import { AllContext } from './AllContext';
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { TbCancel } from "react-icons/tb";
import { MdOutlineClear } from "react-icons/md";

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

    const addingTodoMode = (board) => {
        setAddTodoMode(true);
        setTodoAddBoard(board);
      };
      const addTodo = () => {
        const newTodo = {
          id: Date.now() + "",
          title: todoTitle,
          isChecked: false,
        };
        const updateTodo = boards.map((board) =>
          board.id == todoAddBoard.id
            ? { ...board, todos: [newTodo, ...board.todos] }
            : board
        );
        setBoards(updateTodo);
        setAddTodoMode(false);
        setTodoTitle("");
      };
      const checkHandler = (ckboard, cktodo) => {
        const update = boards.map((board) =>
          board.id == ckboard.id
            ? {
                ...board,
                todos: board.todos.map((todo) =>
                  todo.id == cktodo.id
                    ? { ...todo, isChecked: !todo.isChecked }
                    : todo
                ),
              }
            : board
        );
        setBoards(update);
        console.log(cktodo);
      };
    
      const removeBoard = (rmBoard) => {
        boards.map((board) =>
          board.id == rmBoard.id ? { ...board, todos: [] } : board
        );
        const newBoards = boards.filter((board) => board.id !== rmBoard.id);
        setBoards(newBoards);
      };
      const removeTodo = (rmboard, rmtodo) => {
        const update = boards.map((board) =>
          board.id == rmboard.id
            ? {
                ...board,
                todos: board.todos.filter((todo) => todo.id !== rmtodo.id),
              }
            : board
        );
        setBoards(update);
      };
    
      const addBoard = () => {
        if (boardTitle.trim() == "") {
          alert("Write Something");
        } else {
          const newBoard = {
            id: Date.now() + "",
            title: boardTitle,
            todos: [],
          };
          setBoards([newBoard, ...boards]);
          setBoardTitle("");
        }
      };

    
      
    
    
    const searchHandler= ()=>{
      const filteredBoards = boards.filter(board =>
    board.title.toLowerCase().includes(search.toLowerCase())
    );
      console.log(filteredBoards);
      setSearchBoard(filteredBoards)
    }

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
      setTodoTitle,
      addingTodoMode,
      addTodo,
      checkHandler,
      removeBoard,
      removeTodo,
      addBoard,
      searchHandler,
      IoIosAddCircleOutline,
      MdDelete,
      FaDeleteLeft,
      MdFormatListBulletedAdd,
      MdOutlineClear,
      TbCancel,

    }








  return (
    <AllContext.Provider value={value}>
      {children}
    </AllContext.Provider>
  )
}

export default ContextProvider