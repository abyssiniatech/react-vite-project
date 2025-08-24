

const App = () => {
       function idSample(id:string | number){
        return id;
       }
       const idvalue=idSample("sura20151")
       const idvalues=idSample(12)
  return (
    <div>
      <p>{idvalue}</p>
      <p>{idvalues}</p>
    </div>
  )
}

export default App
