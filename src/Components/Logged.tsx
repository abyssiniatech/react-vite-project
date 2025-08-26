import { useState } from "react"


const Logged = () => {
    const [logIn,setLogin] = useState(false)
    const [signup,setSignup] = useState(false)
    const handleSignIn =()=>{
       setLogin(true)
    }
      const handleSignUp =()=>{
        setSignup(true)
    }
  return (
    <div>
        <p>  your Logged in status is  status is :{logIn ? "Congratulation you are logged" : "log in please.."}</p>
        <p>your signup status is :{signup ? "Congratulation you are signed up" : "Sign Up please .."}</p>
        <button onClick={handleSignIn}>login</button>
        <button onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}

export default Logged
