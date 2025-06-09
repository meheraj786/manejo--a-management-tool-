import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [boardTitle, setBoardTitle] = useState("");
  const [boards, setBoards] = useState(()=>
  {
    const boards = localStorage.getItem('boards')
    return boards ? JSON.parse(boards) : [{
      id: Date.now() + "",
      title: "My Board",
      todos: [{id: Date.now()+"",
      title: "My Task"}],
  }]
    },
  );
  const [addTodoMode, setAddTodoMode] = useState(false);
  const [todoAddBoard, setTodoAddBoard] = useState({});
  const [todoTitle, setTodoTitle] = useState("");

  const addingTodoMode = (board) => {
    setAddTodoMode(true);
    setTodoAddBoard(board);
  };
  const addTodo = () => {
    const newTodo= {
      id: Date.now()+"",
      title: todoTitle
    }
    const updateTodo = boards.map((board) =>
      board.id == todoAddBoard.id
        ? { ...board, todos: [newTodo, ...board.todos] }
        : board
    );
    setBoards(updateTodo);
    setAddTodoMode(false);
    setTodoTitle("");
  };

  const removeBoard = (rmBoard) => {
    boards.map((board) =>
      board.id == rmBoard.id ? { ...board, todos: [] } : board
    );
    const newBoards = boards.filter((board) => board.id !== rmBoard.id);
    setBoards(newBoards);
  };
  const removeTodo= (rmboard, rmtodo)=>{
    const update= boards.map((board)=>(
      board.id==rmboard.id ? {
        ...board,
        todos: board.todos.filter((todo)=>todo.id!==rmtodo.id)
      }:board
    ))
    setBoards(update)
  }

  const addBoard = () => {
    if (boardTitle.trim()=="") {
      alert("Write Something")
      
    }else{
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
    localStorage.setItem("boards", JSON.stringify(boards))
  }, [boards])
  

  return (
    <div className="w-[1320px] p-10 mx-auto bg-[#50428A] h-[60vh] mt-10 rounded-2xl px-5">
      <h1 className="text-center mb-10">Manejo</h1>
      <div className="text-center flex items-center justify-center gap-x-2">
        <input
          className="!w-auto outline-none border-none"
          type="text"
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
          placeholder="Board Name"
        />
        <button className="py-2 px-4" onClick={addBoard}>Add Board</button>
      </div>

      <div className="boards overflow-hidden mt-10 flex flex-wrap items-start justify-center gap-10">
        {boards && boards.map((board) => (
          <div key={board.id} className="board wrap-anywhere">
            <h2 className="flex justify-between  items-center">
              {board.title}
              <span
                onClick={() => removeBoard(board)}
                className="cursor-pointer"
              >
                x
              </span>
            </h2>
            <hr />
            <ul className="mt-5">
               { board.todos && board.todos.map((todo) => (
                <li key={todo.id} className="flex justify-between items-center wrap-anywhere gap-3">
                  
                  <div className="flex  items-center  justify-start gap-1">
                    <input type="checkbox" className="!w-auto" />
                  <span title={todo.title} className="w-full">
  {todo.title}
</span>
                  </div>
                  <span className="cursor-pointer" onClick={()=>removeTodo(board, todo)}>x</span>


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
              {addTodoMode ? (
               <>
               
                <button className="px-1" onClick={addTodo}>Add</button>
                <button className="px-1" onClick={()=>setAddTodoMode(false)}>x</button>
                </>
              ) : (
                <button
                  className="px-1 bg-gray-900 text-white"
                  onClick={() => addingTodoMode(board)}
                >
                  +
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
