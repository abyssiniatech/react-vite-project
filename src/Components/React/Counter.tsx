

const Counter = () => {
    class Person{
        id: number;
        name: string;
        constructor(name:string,id:number){
              this.name=name;
              this.id =id
        }
    }
    const person1 =new Person("surafel",12);
  return (
    <div>
         <p>my name is {person1.name}</p> 
           <p>i am{person1.id}  years old</p>    
    </div>
  )
}

export default Counter
