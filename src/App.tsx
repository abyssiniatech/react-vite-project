interface user{
     name:string,
     id:number,
     age:number
}
const App = () => {
  const userInfo:user={
    name:"surafel mengist",
    id: 1,
    age:23,
  }
  return (
    <div>
      <p>Name: {userInfo.name}</p>
      <p>ID: {userInfo.id}</p>
      <p>Age: {userInfo.age}</p>
    </div>
  )
}

export default App
