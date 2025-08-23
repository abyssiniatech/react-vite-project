// normal array in ts
// In TypeScript, an array is a collection of values of the same type (or sometimes a union of types).
const App = () => {
 
  // Method 1: Using []
  const numbers: number[] = [1, 2, 3, 4];

// Method 2: Using Array<type>
const fruits: Array<string> = ["apple", "banana", "mango"];
  return (
    <div>
          {/* two excute array in the dom we can use map(),foreach or other methods */}
          {fruits.map((fr)=>{
            return <p>{fr}</p>
          })}
          {numbers.map((num)=>{
            return <p>{num}</p>
          })}
    </div>
  )
}

export default App
