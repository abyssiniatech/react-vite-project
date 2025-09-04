
// type definition for props

import type React from "react";

type Child1Props  = {
  title: string;
    style: React.CSSProperties;
    children: React.ReactNode;
    className?: string;
    count: number;
    // setCount: React.Dispatch<React.SetStateAction<number>>;
    setCount: React.Dispatch<React.SetStateAction<number>>
};


// the child component
const Child1 =({title,children,className,style,count,setCount}:Child1Props) =>{
    return(
        <div style={style} className={className} >
           <p>{title}</p>
              <p className="text-3xl font-bold m-2">the value of count is {count}</p>
           {setCount && <button className="bg-teal-700 text-white rounded px-4 py-2 text-center text-2xl  m-2"  onClick={()=>setCount(prev =>prev-1)}>Decrement</button>}
           {setCount && <button className="bg-pink-700 text-white rounded px-4 py-2 text-center text-2xl  m-2" onClick={()=>setCount(0)}>Reset</button>}
           {setCount && <button className="bg-blue-700 text-white rounded px-4 py-2 text-center text-2xl  m-2" onClick={()=>setCount(prev =>prev+1)}>Increment</button>}
           

           {children}
        </div>
            )
}
export default Child1