import {useState} from "react"
import Increment from "./Components/React/Increment";
const App =() =>{
  const[count,setCount]= useState<number>(0)
  return(
  <div>
    <Increment count={count} setCount={setCount} />
  </div>
  )
}

export default App