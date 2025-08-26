import { useState } from "react"
const Usestate  = () => {
  const [count, setCount] = useState<number>(0);
     const handleIncrement = () => {
            setCount(count + 1);
     }
     const handleDecrement =() =>{
        setCount(count-1)
     }
     const handleReset =()=>{
        setCount(0)
     }
  return (
    <div>
          <div className="bg-teal-400 rounded flex justify-center items-center p-4 m-2">
                 <h1>{count}</h1>
                 <button onClick={handleDecrement}>Decrement</button>
                 <button onClick={handleReset}>Reset</button>
                 <button onClick={handleIncrement} className="bg-blue-500 accordion-button px-4 py-2  rounded text-center fs-bold border-none">Increment</button>
          </div>
         
    </div>
  )
}

export default Usestate
