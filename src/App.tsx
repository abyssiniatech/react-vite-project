import { Route,Routes } from "react-router-dom"
import Home from './Components/Home/Home';
import About from "./Components/About/About";
import  Navbar  from "./Components/Navbar";
import User from "./Components/User/User";
import Contact from "./Components/Contact/Contact";
import Main from "./Components/Class";
const App = () => {
  return (
    <div> 
    
            <Navbar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user" element={<User />}></Route>
      </Routes>
      <Main />
    </div>
  )
}

export default App
