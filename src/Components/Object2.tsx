// type student information
type Student = {
    name: string;
    age: number;
    email: string;
}

const Object2 = () => {
  const student: Student = {
    name: "Jane Doe",
    age: 25,
    email: "jane.doe@example.com"
  };

  return (
    <div>
          <pre>{JSON.stringify(student, null, 2)}</pre>
    </div>
  )
}

export default Object2
