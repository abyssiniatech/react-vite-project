import Card from "./Components/React/Childeren"

const App = () => {
  return (
    <div>
      <Card title="Card Title" style={{ border: "1px solid black", textAlign:"center", color:"blue", padding: "16px", borderRadius: "8px" }}>
        <p>This is the card content.</p>
      </Card>
    </div>
  )
}

export default App
