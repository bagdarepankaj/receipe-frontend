import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import './index.css'
import StopWatch from './components/StopWatch.jsx'
import Counter from './components/Counter.jsx'
import Receipe from './components/Receipe/Receipe.jsx'
import CreateRecipe from './components/Receipe/CreateRecipe.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/watch',
    element: <StopWatch />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/random',
    element: <Receipe />
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/receipe/:mealId',
        element: <Receipe />
      },
      {
        path: '/create-receipe',
        element: <CreateRecipe />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
