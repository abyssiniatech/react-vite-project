import { useParams } from "react-router-dom"
const StudentInfo = () => {
const params=  useParams<{ id: string }>()
const studentId=params.id
  return (
    <div>
            <h1> student list page</h1>
            <p>Student ID: {studentId}</p>
    </div>
  )
}

export default StudentInfo
