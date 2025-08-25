

type Propstypes ={

    firstName: string,
    lastName:string,
    
}
const PropsName=(props:Propstypes)=>{
    return (
    <div>
         <p>{props.firstName}</p>
         <p>{props.lastName}</p>
    </div>)
}
 export default PropsName