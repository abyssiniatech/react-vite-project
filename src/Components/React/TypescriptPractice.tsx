import React from "react";

const TypescriptPractice: React.FC = () => {
  function printId(id: string | number): string {
    if (typeof id === "string") {
      return id.toUpperCase(); // return string
    }
    else if(typeof id === "number"){
        return (id*id).toFixed(3); 
    }
     else {
      return id; // return string (from number)
    }
  }

  const info = printId(101);

  return (
    <div>
      {info}
    </div>
  );
};

export default TypescriptPractice;
