
type Infoprop = {
    name: string;
    age: number;
    email: string;
}

const  Main=() =>{
    class Info implements Infoprop {
    name: string;
    age: number;
    email: string;
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

}
const final=new Info("aster",21,"surafel@gmail.com")
   console.log(final)
return(
           <div className="bg-pink-700 rounded-lg text-center  text-white w-[300px] m-auto p-2">
            <p>Name: {final.name}</p>
            <p>Age: {final.age}</p>
            <p>Email: {final.email}</p>
           </div>
    )    
}
export default Main