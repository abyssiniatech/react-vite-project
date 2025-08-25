// An enum (short for enumeration) is a special TypeScript feature that lets you define a set of named constants (a group of related values with names).



const Direction = {
  Up: "Up",
  Down: "Down",
  Left: "Left",
  Right: "Right",
} as const;
type Direction = (typeof Direction)[keyof typeof Direction];

const App: React.FC = () => {
  const move: Direction = Direction.Up;

  return (
    <div>
      <h1>Enum Example</h1>
      <p>Current Move: {move}</p> {/* ✅ Directly prints "Up" */}
    </div>
  );
};

export default App;
