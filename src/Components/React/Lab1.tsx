
interface info{
    name: string;
    age: number;
    isComplete: boolean;
}

const student:info= {
    name: "John",
    age: 20,
    isComplete: false,
}
const Lab1 = (student: info) => {
  return (
    <div>
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Completed: {student.isComplete ? "Yes" : "No"}</p>
    </div>
  )
}

export default Lab1
