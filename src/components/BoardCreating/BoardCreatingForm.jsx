import React, { useContext } from 'react'
import { AllContext } from '../../context/AllContext'

const BoardCreatingForm = () => {
  const {boardTitle,setBoardTitle,addBoard, IoIosAddCircleOutline }= useContext(AllContext)

  

  return (
          <div className="boardInput text-center flex items-center justify-center gap-x-2">
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
  )
}

export default BoardCreatingForm