import './App.css'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'

function App() {

  return (
    <>
    <Header />
    <Container maxWidth="lg">
      <Outlet />
    </Container>
    </>
  )
}

export default App
