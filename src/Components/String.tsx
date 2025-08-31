type info={
    status:"load" | "error"  | "login"
}
const name:info ={
    status : "load"
}

const Strings = () => {
     
  return (
    <div>
      {name.status ==="load" ? "load my page": "error"}
    </div>
  )
}

export default Strings
