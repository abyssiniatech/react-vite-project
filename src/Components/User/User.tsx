const User =()=>{
     return(
     <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">User Page</h1>
          <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
               <input className="border border-gray-300 p-2 rounded w-full" type="text" placeholder="Enter your name" />
               <button className="bg-blue-500 text-white p-2 rounded mt-4 min-w-full" type="submit">Submit</button>

          </form>
     </div>)
}
export default User