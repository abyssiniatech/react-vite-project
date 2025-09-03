import Card from "./Components/React/Childeren"
import Parent from "./Components/React/Parent"
import Son from "./Components/React/Son"
const App = () => {
  return (
    <div className="flex justify-between items-center gap-2 bg-teal-100">
      <Card title="Card Title" style={{ border: "1px solid black", textAlign:"center", color:"blue", padding: "16px", borderRadius: "8px" }}>
        <p>This is the card content.</p>
        <button className="bg-green-700 text-white px-4 py-2 rounded">Click Me</button>
      </Card>
      
           
            <Son title={"card-title"} style={{border:"1px solid black", textAlign:"center", color:"red"}}>

              <p>these is the best prpgramming to the new generatioom with </p>
              <button className="bg-blue-700 text-white rounded px-4 py-2  mt-3">Add me</button>
            </Son>


            <hr />

            <Parent className="text-center" title={"Parent title"} style={{backgroundColor:"teal", border:"1px solid red", color:"white" ,textAlign:"center"}}>
                
                    <h1>Hello these is the child components </h1>
                    <button className="bg-pink-700 rounded text-center py-2 px-4 text-white">Submit</button>
              </Parent>
    </div>
  )
}

export default App
