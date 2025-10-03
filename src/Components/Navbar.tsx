type NavbarProps = {
    // navlink style
    activeStyle: (isActive: boolean) => React.CSSProperties;
}
import { NavLink } from "react-router-dom"
const Navbar =({ activeStyle }: NavbarProps) => {
     return (
     <nav className="bg-blue-500 p-4 text-white">
         <ul className="flex space-x-4" >
                <li><NavLink to="/" style={({ isActive }) => activeStyle(isActive)}>Home</NavLink></li>
                <li><NavLink to="/user" style={({ isActive }) => activeStyle(isActive)}>User</NavLink></li>
                <li><NavLink to="/about" style={({ isActive }) => activeStyle(isActive)}>About</NavLink></li>
                <li><NavLink to='/contact' style={({ isActive }) => activeStyle(isActive)}>Contact</NavLink></li>
                <li><NavLink to='/order' style={({ isActive }) => activeStyle(isActive)}>Order</NavLink> </li>
               <li><NavLink to='/products' style={({ isActive }) => activeStyle(isActive)}>Products</NavLink></li>
            
               
         </ul>
     </nav>
     )
}
export default Navbar