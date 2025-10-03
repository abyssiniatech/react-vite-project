import { useNavigate } from "react-router-dom"
const Home = () => {
  const  navigate  = useNavigate();
  return (
    <div className=" text-center w-full p-4 bg-pink-700 text-white rounded-lg">
            <h1>Home page!</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque repellat, eius commodi velit non fugit consectetur quasi eligendi, harum nisi dignissimos fugiat rem voluptatibus doloremque repudiandae ad totam maiores modi.</p>
            <button onClick={() => navigate("/order")} className="bg-blue-500 p-2 rounded mt-4 ">Place Order</button>
    </div>
  )
}

export default Home
