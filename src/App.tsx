import { Box } from '@mui/material'
import './App.css'
import Navbar from "./component/Navbar"
import Profile from './component/Profile'
import Projects from './component/Projects'
function App() {

  return (
    <Box>
      <Navbar/>
      <Profile/>
      <Projects/>
    </Box>
  )
}

export default App
