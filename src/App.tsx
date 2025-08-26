import Person from "./Components/Person"

// import Styles from "./Components/Styles"
const App = () => {
  return (
    <div>
        <Person name="Surafel Mengist" age={27} email="surafelmengist2015@gmail.com" style ={{color:"white", textAlign:"center", backgroundColor:"teal", borderRadius:'10px'}} />
         {/* <Styles  style={{color:"white", borderRadius:"10px"   , textAlign:"center",backgroundColor:"blue" ,padding:"10px"}}/> */}
    </div>
  )
}
export default App
