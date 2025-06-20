import React, { useContext } from 'react'
import { AllContext } from '../../context/AllContext'

const BoardListStructure = ({board, todo}) => {
  const { checkHandler,removeTodo,FaDeleteLeft }= useContext(AllContext)
  return (
    
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
  )
}

export default BoardListStructure