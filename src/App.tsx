import { Route,Routes } from "react-router-dom"
import Home from './Components/Home/Home';
import About from "./Components/About/About";

const App = () => {
  return (
    <div>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/lab1" element={<Lab1 />} /> */}
      </Routes>
    </div>
  )
}

export default App
