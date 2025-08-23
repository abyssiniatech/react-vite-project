const App = () => {
  // tuple type [string, number, boolean]
  // A tuple in TypeScript is a special type of array with a fixed length and fixed types for each element.
  const person: [string, number, boolean] = ["surafel", 23, true];

  return (
    <div>
      <p>{person[0]}</p> {/* name */}
      <p>{person[1]}</p> {/* age */}
      <p>{person[2] ? "true" : "false"}</p> {/* boolean */}
    </div>
  );
};

export default App;
