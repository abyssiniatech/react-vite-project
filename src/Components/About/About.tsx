import { useNavigate } from  "react-router-dom";


const About = () => {
  const navigate = useNavigate();
  return (
    <div className=" text-center w-full p-4 bg-gray-100 rounded-lg">
         <h1>About page!</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate dicta pariatur maxime assumenda, quidem consequatur itaque ex sint dolorem enim, eveniet minima ullam, dolorum dolor magnam tempore vero dolore!</p>
            <hr />
            <button className="bg-teal-500 text-white  p-2 rounded mt-4 " onClick={() => navigate("/")}>Go to Home Page</button>
    </div>
  )
}

export default About
