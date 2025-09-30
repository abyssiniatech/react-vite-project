import { Route,Routes } from "react-router-dom"
import Home from './Components/Home/Home';
import About from "./Components/About/About";
import  Navbar  from "./Components/Navbar";
import Contact from "./Components/Contact/Contact";
const App = () => {
  return (
    <div> 
    
            <Navbar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
