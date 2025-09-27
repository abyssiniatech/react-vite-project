type Props = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}
const Increment = ({ count, setCount }: Props) => {

  return (
    <div className="bg-teal-200 p-5 m-5 text-center rounded">
      <h1 className="text-3xl text-pink-700">{count}</h1>
      <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="bg-black text-white p-2 rounded m-2" onClick={() =>setCount(0)}>Reset</button>
      <button className="bg-teal-500 text-white p-2 rounded m-2" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Increment
