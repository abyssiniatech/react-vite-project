import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  return (
    <div>
          <h1>Congratulations! Your order has been placed successfully!</h1>
          <hr />
          <button onClick={() => navigate("/")} className="bg-blue-500 p-2 rounded mt-4 ">Go to Home Page</button>
    </div>
  )
}

export default Order
