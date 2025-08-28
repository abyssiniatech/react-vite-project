// method 1 
const human : {name:string,age:number,email:string} ={
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
}


const Object =() =>{
    return (
    <div>
        <h1>Object Component</h1>
        <pre>{JSON.stringify(human, null, 2)}</pre>
    </div>
    )
}
export default Object