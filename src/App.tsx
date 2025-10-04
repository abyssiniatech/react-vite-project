
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import User from "./Components/User/User"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Order from "./Components/Order/OrderSummary"
import Notfound from "./Components/Notfound"
import Products from "./Components/Product/Product"
import Feature_products from "./Components/Product/Feature_products"
import New_products from "./Components/Product/New_products"
import Students from "./Components/Students"
import StudentFamily from "./Components/StudentFamily"
import StudentInfo from "./Components/StudentInfo"
const App = () => {
  return (
    <div>
      <Navbar activeStyle={(isActive) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? 'blue' : 'black',
      })} />
      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/user" element={<User />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<Notfound />} />
            <Route path="/products" element={<Products />} >
                <Route path="feature" element={<Feature_products />} />
                <Route path="new" element={<New_products />} />
               
            </Route>
            <Route path="/students" element={<Students />} >
              <Route path=":id" element={<StudentInfo />} />
              <Route path="family" element={<StudentFamily />} />
            </Route>
      </Routes>
    </div>
  )
}

export default App
