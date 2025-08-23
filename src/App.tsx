

 const App = () => {
  const myName: string = "Surafel";   // text
   const age: number = 25;             // numbers (int, float, etc.)
   const isStudent: boolean = true;    // true / false
   const nothing: null = null;         // null
   const notAssigned: undefined = undefined; // undefined
   const big: bigint = 100n;           // big integer
   const uniqueId: symbol = Symbol("id"); // unique value
 
  return (
    <div>
         <p>my name is {myName}</p>
         <p>i am {age} years old</p>
         <p>{isStudent ? "you are a student":"you are not a student"}</p>
         <p>{nothing ? "nothing": "some output"}</p>
         <p>{notAssigned ? "undefind": "defind"}</p>
         <p>{big}</p>
         <p>{uniqueId ? "unigue id": "invalid input"}</p>
    </div>
  )
}

export default App
