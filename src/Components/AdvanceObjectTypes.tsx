type studentType={
    name:string;
    age:number;
    grade:number;
    year:number;
    isCompleted:boolean;
}
const students: studentType[] =[
    {
        name:"aster",
        age:13,
        grade:12,
        year:2025,
        isCompleted:true
    },
     {
        name:"aster",
        age:13,
        grade:12,
        year:2025,
        isCompleted:true
    },
     {
        name:"aster",
        age:13,
        grade:12,
        year:2025,
        isCompleted:true
    },
     {
        name:"aster",
        age:13,
        grade:12,
        year:2025,
        isCompleted:true
    },
     {
        name:"aster",
        age:13,
        grade:12,
        year:2025,
        isCompleted:true
    },
     {
        name:"aster",
        age:13,
        grade:12,
        year:2025,
        isCompleted:true
    },
  ]
// interface AdvanceObjectTypesProps {
//   students: studentType[];
// }

const AdvanceObjectTypes = () => {
  return (
    <div>
      <h2>Students List</h2>
      <ul>
        {students.map((student, idx) => (
          <li key={idx}>
            {student.name} - Age: {student.age}, Grade: {student.grade}, Year: {student.year}, Completed: {student.isCompleted ? "Yes" : "No"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdvanceObjectTypes
