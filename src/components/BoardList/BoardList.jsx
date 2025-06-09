import React, { useContext } from 'react'
import { BoardContext } from '../contexts/Board'
import { Link } from 'react-router'
import BoardItem from '../BoardItem/BoardItem'

const BoardList = () => {
  const {boards}= useContext(BoardContext)
  return (
    <div>
      {
        boards.map((board)=>(
          <Link key={board.id}>
            <BoardItem board={board}/>
          </Link>
        ))
      }

    </div>
  )
}

export default BoardList