import { Link,Outlet } from "react-router-dom"

const Products =()=>{
    return (
        <div className="p-4 m-4 ">
            <input type="text" placeholder="enter product" />
            <button className="bg-teal-500 rounded">Add</button>
                 <nav style={{backgroundColor:"yellow"}} className="flex gap-4 m-4">
                  <Link to="feature" >Feature Products</Link>
                  <Link to="new">New Products</Link>
                   </nav>
                   <Outlet />
        </div>
    )
}
export default  Products