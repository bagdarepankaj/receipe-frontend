import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Route.jsx'
import { FavouritesProvider } from './context/FavouritesContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavouritesProvider>
      <RouterProvider router={router} />
    </FavouritesProvider>
  </React.StrictMode>,
)
 
