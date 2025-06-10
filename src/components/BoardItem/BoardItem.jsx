import React, { useContext } from 'react'
import { AllContext } from '../../context/AllContext'
import BoardStructure from './BoardStructure'

const BoardItem = () => {
  const {searchBoard, boards }= useContext(AllContext)

  return (
    <div className="boards overflow-hidden mt-[100px] flex flex-wrap items-start justify-center gap-y-7 gap-x-3 lg:gap-10">
        
        {(searchBoard ?? boards).map((board) => (
            <BoardStructure board={board} />
          ))}
      </div>
  )
}

export default BoardItem