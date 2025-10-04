import { Outlet } from "react-router-dom"
import StudentFamily from "./StudentFamily"
import  StudentInfo from "./StudentInfo"


const Students = () => {
  return (
    <div>
          <h1> student list page</h1>
          <p>student 1</p>
          <p>student 2</p>
          <p>student 3</p>
          <StudentInfo />
          <StudentFamily />
          <Outlet />
    </div>
  )
}

export default Students
