import React, { useContext } from 'react'
import { AllContext } from '../../context/AllContext'
import BoardList from '../BoardList/BoardList'
import ListCreating from '../listCreating/ListCreating'

const BoardItem = () => {
  const {searchBoard, boards, removeBoard, addTodoMode,todoAddBoard,todoTitle, setTodoTitle, addTodo, setAddTodoMode, addingTodoMode, MdDelete, IoIosAddCircleOutline,  MdFormatListBulletedAdd, TbCancel  }= useContext(AllContext)

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
<BoardList board={board}/>
              <ListCreating board={board}/>
            </div>
          ))}
      </div>
  )
}

export default BoardItem