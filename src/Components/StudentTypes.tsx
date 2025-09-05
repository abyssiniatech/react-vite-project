import type { student } from "./types/Student"
    
    const st:student={
    name:"surafel",
    grade:'A',
    year:23,
    Status :true
    }
   
const StudentTypes = () => {
  return (
    <div  className="bg-teal-300 text-white bold text-center rounded m-auto w-100">
      <h1>{st.name}</h1>
      <h1>{st.year}</h1>n
      <h1>{st.grade}</h1>
      <h1>{st.Status ? "hello you grade 8" : "you are not accomplished"}</h1>
    </div>
  )
}

export default StudentTypes
