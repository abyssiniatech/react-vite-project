interface sum{
    num1:number;
    num2:number;
}
const interfaceObj= {
  num1:12,
     num2: 34,
}

const Interface = (interfaceObj: sum) => {
    const sumValue = interfaceObj.num1 *  interfaceObj.num2;
    return (
      <div className="bg-pink-700 text-white text-center rounded p-4 mt-8">
        <h1>{sumValue}</h1>
      </div>
    );
}

export default function InterfaceWrapper() {
  return <Interface {...interfaceObj} />;
}