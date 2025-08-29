


function sum(a:number,b:number,c?:number):number{
    if (typeof c !== 'undefined')
        return a + b + (c as number);
    return a + b;
}
const result=sum(12,23,40)
console.log(result)



type nums={
    name:string;
    age:number;
}
const nameEnum = {
    A: 23,
    B: 24,
    C: 25,
    D: 26,
} as const;
const namess = nameEnum.A;
console.log(namess);
const obj1:nums={
    name: "surafel",
    age:23,
}
obj1.name="biruk"



const Lab =() =>{
    return (
    <div>
           <p>{obj1.name.toUpperCase()}</p>
           <p>{obj1.age}</p>
    </div>
    )
}
export default Lab