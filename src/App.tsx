

function App() {
  const numbers:number[]=[1,2,3,4,5,6,];
   const frainds=["able","nahom","Bruk","aster"]
  
  return (
    <div>
      {numbers.map((num)=>{
          return <p>{num}</p>
      })}
         {
          frainds.map((fraind) =>{
                return <p>{fraind}</p>
          })
         }
    </div>
  )
}

export default App
