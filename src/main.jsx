import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router'
import Boards from './components/pages/Boards.jsx'
import BoardDetails from './components/pages/BoardDetails.jsx'

const router= createBrowserRouter([
  {path: '/', element: <Boards/>},
  {path: '/board-details', element: <BoardDetails/>},
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
