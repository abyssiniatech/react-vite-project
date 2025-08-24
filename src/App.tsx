
const App = () => {
  function printId(id:    string){
  return  id.toUpperCase();

}
const nm = printId("hello") 
  return (
    <div>
            <p>{nm}</p>
    </div>
  )
}

export default App
