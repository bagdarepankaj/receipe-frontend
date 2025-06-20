import App from '../App.jsx'
import Home from '../components/Home.jsx'
import Login from '../components/Login.jsx'
import Counter from '../components/Counter.jsx'
import StopWatch from '../components/StopWatch.jsx'
import CreateRecipe from '../components/Receipe/CreateRecipe.jsx'
import Receipe from '../components/Receipe/Receipe.jsx'
import Favourite from '../components/Favourite.tsx'
import CategoryList from '../components/List/CategoryList.tsx'
import AreaList from '../components/List/AreaList.tsx'
import { createBrowserRouter } from "react-router-dom"

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
          path: '/home',
          element: <Home />
        },
        {
          path: '/receipe/:mealId',
          element: <Receipe />
        },
        {
          path: '/categories',
          element: <CategoryList/>
        },
        {
          path: '/areas',
          element: <AreaList/>
        },
        {
          path: '/create-receipe',
          element: <CreateRecipe />
        },
        {
          path: '/favourites',
          element: <Favourite />
        }
      ]
    }
])

export { router };