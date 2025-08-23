type AppProps = {
  name: string;
  age: number;
  isAdmin: boolean;
};

const user: AppProps = {
  name: "surafel",
  age: 23,
  isAdmin: false, // ✅ matches type
};

const App = ({ name, age, isAdmin }: AppProps) => {
  return (
    <div>
      <p>My name is {name}</p>
      <p>I am {age} years old</p>
      <p>{isAdmin ? "You are admin" : "You are not admin"}</p>
    </div>
  );
};

export default function Root() {
  return <App {...user} />; // ✅ passing props correctly
}
