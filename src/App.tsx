   type user = {
      name:string,
      age:number,
     }
const App = () => {
     function usermanagment(user:user){
         return `user:${user.name} age: ${user.age}`
     }
     const value= usermanagment({name:"surafel",age:23})

  return (
    <div>
         {value}
    </div>
  )
}

export default App
