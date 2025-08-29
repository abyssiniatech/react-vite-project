
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
    return(
           <div>
            <p>Name: {final.name}</p>
            <p>Age: {final.age}</p>
            <p>Email: {final.email}</p>
           </div>
    )    
}
export default Main