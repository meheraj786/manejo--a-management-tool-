import React, { useContext } from 'react'
import { BoardContext } from '../contexts/Board'

const BoardItem = ({board}) => {
  const {dispatchBoardActions}= useContext(BoardContext)

  const removeHandler=(e)=>{
    e.preventDefault();
    e.stopPropagation()
    dispatchBoardActions({type: "REMOVE_BOARD", payload: board.Id})

  }
  return (
    <div>
      <h5>{board.title}</h5>
      <p onClick={removeHandler}>X</p>
    </div>
  )
}

export default BoardItem