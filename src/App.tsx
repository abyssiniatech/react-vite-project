
// array in typescript
const App = () => {
const   numbers: number[] = [1, 2, 3,4,5];
const  names: Array<string> = ["surafel", "john","abel","yonatan"];
  return (
    <div>
          <div>
            {names.map((name)=>{
                 return <p>{name}</p>
            })}
                <ul>
                  {numbers.map((num)=>{
                     return <li>{num}| {names.map((nm)=><p>{nm}</p>)} </li>
                  })}
                </ul>
          </div>
    </div>
  )
}

export default App
