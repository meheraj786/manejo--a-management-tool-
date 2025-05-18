import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router'
import Boards from './components/pages/Boards.jsx'
import BoardDetails from './components/pages/BoardDetails.jsx'
import BoardProvider from './components/contexts/Board.jsx'
import ListProvider from './components/contexts/List.jsx'
import TaskProvider from './components/contexts/Task.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'

const router= createBrowserRouter([
  {path: '/', element: <Boards/>, errorElement:<ErrorPage/>},
  {path: '/board-details', element: <BoardDetails/>},
])

createRoot(document.getElementById('root')).render(
  <BoardProvider>
    <ListProvider>
      <TaskProvider>
    <RouterProvider router={router}/>
      </TaskProvider>
    </ListProvider>
  </BoardProvider>
)
