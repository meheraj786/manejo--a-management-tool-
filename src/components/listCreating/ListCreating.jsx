import React, { useContext } from 'react'
import { AllContext } from '../../context/AllContext'

const ListCreating = ({board}) => {
  const {addTodoMode,todoAddBoard,todoTitle, setTodoTitle, addTodo, setAddTodoMode, addingTodoMode, IoIosAddCircleOutline,  MdFormatListBulletedAdd, TbCancel  }= useContext(AllContext)
  return (
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
  )
}

export default ListCreating