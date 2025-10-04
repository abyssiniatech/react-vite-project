import { useParams } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

const StudentInfo = () => {
const params=  useParams<{ id: string }>()
const studentId=params.id
const [searchParams, setSearchParams] = useSearchParams()
const active=searchParams.get('active')
const reset=searchParams.get('reset')
console.log(active,reset)
  return (
    <div>
            <h1> student list page</h1>
            <p>Student ID: {studentId}</p>
            <button className="bg-pink-700 text-white p-4  rounded m-2 text-center" onClick={() => setSearchParams({ active: 'true' })}>Active user</button>
            <button className="bg-pink-700 text-white p-4  rounded m-2 text-center" onClick={() => setSearchParams({ reset: 'true' })}>reset user</button>
    </div>
  )
}

export default StudentInfo
