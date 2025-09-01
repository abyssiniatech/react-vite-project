type studentProps = {
name:string,
age:number,
major:string,
}

const props = (props: studentProps) => {
  return (
    <div>
      <h2>Student Information</h2>
      <ul>
        <li>Name: {props.name}</li>
        <li>Age: {props.age}</li>
        <li>Major: {props.major}</li>
      </ul>
    </div>
  )
}

export default props
