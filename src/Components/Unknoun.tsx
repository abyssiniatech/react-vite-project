
const Unknoun = () => {
    function processValue(value: unknown) {
  if (typeof value === 'string') {
    // value is now treated as string
    console.log(value.toUpperCase());
  }
//   number type
else if(typeof value === "number"){
    console.log(value.toFixed(2));
}

// boolean type 
else if(typeof value === "boolean"){
    console.log(value ? "TRUE" : "FALSE");
}

// array types
else if(typeof value === "object" && value !== null && !Array.isArray(value)){
    console.log(Object.keys(value));
}




  else if (Array.isArray(value)) {
    // value is now treated as any[]
    console.log(value.length);
  }
}
processValue({ name: "surafel" })
  return (
    <div>
        <p>404 | Not Found</p>
    {/* Function call moved outside of JSX, or display result here if needed */}
    </div>
  )
}

export default Unknoun
