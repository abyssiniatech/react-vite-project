const Direction = {
    UP: "UP",
    DOWN: "DOWN",
    LEFT: "LEFT",
    RIGHT: "RIGHT"
} as const;

const Enum = () => {
    const updirection = Direction.UP;
    const rightdirection = Direction.RIGHT;
    const leftdirection = Direction.LEFT;
    const downdirection = Direction.DOWN;
  return (
    <div className="bg-teal-700 grid grid-rows-4 grid-cols-2 gap-2  rounded white bold text-center p-5 m-2">
    
          <p>{updirection}✈</p>
          <p>{rightdirection}🚙</p>
          <p>{leftdirection}🛴</p>
          <p>{downdirection}🚇</p>
          
    </div>
  )
}

export default Enum
