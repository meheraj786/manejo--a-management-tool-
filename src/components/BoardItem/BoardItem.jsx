import React, { useContext } from 'react'
import { AllContext } from '../../context/AllContext'

const BoardItem = () => {
  const {searchBoard, boards, removeBoard, checkHandler,removeTodo,addTodoMode,todoAddBoard,todoTitle, setTodoTitle, addTodo, setAddTodoMode, addingTodoMode  }= useContext(AllContext)

  return (
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
  )
}

export default BoardItem