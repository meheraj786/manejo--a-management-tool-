import React, { useContext } from 'react'
import { AllContext } from '../../context/AllContext'
import BoardList from '../BoardList/BoardList'
import ListCreating from '../listCreating/ListCreating'

const BoardStructure = ({board}) => {
  const {removeBoard, MdDelete }= useContext(AllContext)
  return (
    <div key={board.id} className="board lg:w-[20%] w-[48%] wrap-anywhere">
              <h2 className="flex justify-between  items-center">
                {board.title}
                <span
                  onClick={()=>removeBoard(board)}
                  className="cursor-pointer"
                >
                  <MdDelete className="text-[20px]" />
                </span>
              </h2>
              <hr />
<BoardList board={board}/>
              <ListCreating board={board}/>
            </div>
  )
}

export default BoardStructure