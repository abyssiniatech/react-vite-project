import React from "react";
type Props = {
    name: string;
    age: number;
    isRegistered: boolean;
}
const Prop1 = (props: Props) => {
    const info = React.createElement("div", null, `Hello ${props.name}, you are ${props.age} years old and your registration status is ${props.isRegistered ? "active" : "inactive"}.`);

  return (
    <div className="bg-gray-200 p-4 m-4 rounded text-3xl font-bold text-white text-center">
        <p>{info}</p>
    </div>
  )
}

export default Prop1
