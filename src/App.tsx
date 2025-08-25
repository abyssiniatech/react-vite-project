type appType={
  name:string,
  age:number,
  id:number,
  isLogin:boolean
}
const App =(props:appType)=>{
     return (
     <div>
           <h1>{`my name is ${props.name} and i am ${props.age} years old `}</h1>
           <h1>{`my id is ${props.id} and i am ${props.isLogin ? 'logged in' : 'logged out'}`}</h1>
     </div>
     )
}
export default App