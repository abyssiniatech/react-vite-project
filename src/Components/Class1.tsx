const Class1 =()=>{
        class Person {
      private name: string;
    
      public constructor(name: string) {
        this.name = name;
      }
    
      public getName(): string {
        return this.name;
      }
    }
    
    const person = new Person("Jane");
    console.log(person.getName()); 
    return(
    <div>   
      <p>{person.getName()}</p>
    </div>
    )
}


export default Class1;