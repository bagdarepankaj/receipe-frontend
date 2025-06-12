import React, { createContext, useReducer } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Route.jsx'
import './index.css'
import { FavouritesProvider } from './context/FavouritesContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavouritesProvider>
      <RouterProvider router={router} />
    </FavouritesProvider>
  </React.StrictMode>,
)
