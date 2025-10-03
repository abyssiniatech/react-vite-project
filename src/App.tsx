import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar activeStyle={(isActive) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? 'blue' : 'black',
      })} />
      <Routes>
           <Route path="/" element={<h1>Home Page</h1>} />
           <Route path="/user" element={<h1>User Page</h1>} />
           <Route path="/about" element={<h1>About Page</h1>} />
           <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </div>
  )
}

export default App
