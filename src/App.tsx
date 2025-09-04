import { useState } from "react"
import Child1 from "./Components/React/ChildComponents"

const App = () => {
  const [count,setCount] = useState<number>(0)
  return (
    <div>
        <Child1 title="Counter App" style={{border:"2px solid red",margin:"auto",maxHeight:"100vh", width:"500px", backgroundColor:"black",color:"white",padding:"10px", textAlign:"center"}} className={"hello"} count={count} setCount={setCount}>
                      <p>the value count is = {count}</p>

                 <button className="bg-teal-700 text-white rounded px-4 py-2 text-center text-2xl  m-2" onClick={()=>setCount(prev =>prev-1)}>Decrement</button>
                <button className="bg-blue-700 text-white rounded px-4 py-2 text-center text-2xl  m-2" onClick={()=>setCount(0)}>Reset</button>
                <button className="bg-pink-700 text-white rounded px-4 py-2 text-center text-2xl  m-2" onClick={()=>setCount(prev=>prev+1)}>Increment</button>
          </Child1>
    </div>
  )
}

export default App
