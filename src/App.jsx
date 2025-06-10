import React, { useEffect, useState } from "react";
import "./App.css";
import { SiGooglecampaignmanager360 } from "react-icons/si";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { TbCancel } from "react-icons/tb";
import { MdOutlineClear } from "react-icons/md";



function App() {
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
  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]);

  


const searchHandler= ()=>{
  const filteredBoards = boards.filter(board =>
board.title.toLowerCase().includes(search.toLowerCase())
);
  console.log(filteredBoards);
  setSearchBoard(filteredBoards)
}
  

  return (
    <div className="lg:w-[1320px] w-full p-10 mx-auto bg-[#50428A] min-h-[60vh] mt-10 rounded-2xl px-2 lg:px-5">
      <h1 className="text-center flex items-center justify-center gap-x-3 mb-10">
        Manejo <SiGooglecampaignmanager360 />
      </h1>
      <div className="text-center flex items-center justify-center gap-x-2">
        <input
          className="!w-auto outline-none border-none"
          type="text"
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
          placeholder="Board Name"
        />
        <button
          className="py-2 flex items-center gap-x-2 px-4"
          onClick={addBoard}
        >
          Add Board
          <span>
            <IoIosAddCircleOutline className="text-[20px]" />
          </span>
        </button>
      </div>
        <div className=" flex relative w-[20%] mx-auto justify-center gap-x-2 mt-5">
          <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value);
          searchHandler()

          }} placeholder="Search Your Board" className="!bg-transparent !border-b !w-auto !border-gray-500"/>
        <span onClick={()=>(
  setSearchBoard(null),
  setSearch("")
)} className="px-2 absolute lg:right-2 -right-18 top-1/2 -translate-y-1/2"><MdOutlineClear />

</span>
        </div>

      <div className="boards overflow-hidden mt-[100px] flex flex-wrap items-start justify-center gap-y-7 gap-x-3 lg:gap-10">
        
        {(searchBoard ?? boards).map((board) => (
            <div key={board.id} className="board lg:w-[20%] w-[48%] wrap-anywhere">
              <h2 className="flex justify-between  items-center">
                {board.title}
                <span
                  onClick={() => removeBoard(board)}
                  className="cursor-pointer"
                >
                  <MdDelete className="text-[20px]" />
                </span>
              </h2>
              <hr />
              <ul className="mt-5">
                {board.todos &&
                  board.todos.map((todo) => (
                    <li
                      key={todo.id}
                      className="flex justify-between items-center wrap-anywhere gap-3"
                    >
                      <div className="flex  items-center  justify-start gap-1">
                        {todo.isChecked ? (
                          <input
                            type="checkbox"
                            onChange={() => checkHandler(board, todo)}
                            checked
                            className="!w-auto"
                          />
                        ) : (
                          <input
                            type="checkbox"
                            onChange={() => checkHandler(board, todo)}
                            className="!w-auto"
                          />
                        )}

                        <span
                          title={todo.title}
                          className={
                            todo.isChecked ? "w-full line-through" : "w-full"
                          }
                        >
                          {todo.title}
                        </span>
                      </div>
                      <span
                        className="cursor-pointer"
                        onClick={() => removeTodo(board, todo)}
                      >
                        <FaDeleteLeft className="text-[20px]" />
                      </span>
                    </li>
                  ))}
              </ul>
              <div className="flex mt-10 items-center justify-between gap-x-1">
                <hr />

                {addTodoMode && board.id == todoAddBoard.id ? (
                  <>
                    <input
                      value={todoTitle}
                      onChange={(e) => setTodoTitle(e.target.value)}
                      type="text"
                    />
                  </>
                ) : null}
                {addTodoMode && board.id == todoAddBoard.id ? (
                  <>
                    <button className=" !bg-transparent" onClick={addTodo}>
                      <IoIosAddCircleOutline className="text-[20px]" />
                    </button>
                    <button
                      className="  !bg-transparent"
                      onClick={() => setAddTodoMode(false)}
                    >
                      <TbCancel className="text-[20px]" />
                    </button>
                  </>
                ) : (
                  <button
                    className=" !bg-transparent text-white"
                    onClick={() => addingTodoMode(board)}
                  >
                    <MdFormatListBulletedAdd className="text-[20px]" />
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
