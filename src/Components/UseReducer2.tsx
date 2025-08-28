  const intialState=0;
import { useReducer } from "react";
const reducer = (state: number, action: { type: string }) => {
    switch (action.type) {
        case "DECREMENT":
            return state + 1;
        case "RESET":
            return 0;
        case "INCREMENT":
            return state - 1;
        default:
            return state;
    }
}

const UseReducer2 =()=>{
    const [state,dispatch] =useReducer(reducer,intialState);
          return (<div>
  <p>Value: {state}</p>
         <button  onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
         <button  onClick={()=>dispatch({type:"RESET"})}>0</button>
         <button  onClick={()=>dispatch({type:"INCREMENT"})}>+</button>

          </div>)
}
export default UseReducer2