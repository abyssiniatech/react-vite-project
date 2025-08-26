import type { PersonProps } from "./PersonProps"

const Person = (props: PersonProps) => {
  return (
    <div style={props.style}>
         <h1>Person Information</h1>
         <p>Name: {props.name}</p>
         <p>Age: {props.age}</p>
         <p>Email: {props.email}</p>
    </div>
  )
}

export default Person
