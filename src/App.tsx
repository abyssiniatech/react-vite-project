
const App = () => {
       function getFavoriteNumber(number:number){
        return number *number
       }
       const product =getFavoriteNumber(12)
  return (
    <div>
           <h1>{product}</h1>
    </div>
  )
}

export default App
