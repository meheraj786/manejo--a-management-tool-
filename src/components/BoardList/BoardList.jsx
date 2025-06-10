import React, { } from 'react'
import BoardListStructure from './BoardListStructure'

const BoardList = ({board}) => {
  return (
                  <ul className="mt-5">
                {board.todos &&
                  board.todos.map((todo) => (
                    <BoardListStructure board={board} todo={todo}  />
                  ))}
              </ul>
  )
}

export default BoardList