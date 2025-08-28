const names:string[] =["bob","sarah",'almaz',"Nahom"];
const numbers:Array<number> = [ 1,2,3,4]
const ages:Array<number> = [25,30,35,40];
const Array = () => {
  return (
    <div>
        <p>{ages.map(age => <div key={age}>{age}</div>)}</p>
        <p>{numbers.map(num => <div key={num}>{num}</div>)}</p>
         <p>{names.map(name => <div key={name}>{name}</div>)}</p>
    </div>
  )
}

export default Array
