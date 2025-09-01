type car ={
    carName: string;
    carModel: string;
    carYear: number;
    carColor: string;
}

// car object declartion
const myCar: car = {
    carName: "Tesla",
    carModel: "V8",
    carYear: 2020,
    carColor: "Red"
}

const TypeAliases = () => {
  return (
    <div>
        <h2>Name:  {myCar.carName}</h2>
        <h2>  Model: {myCar.carModel}</h2>
        <h2> Year: {myCar.carYear}</h2>
        <h2>  Color: {myCar.carColor}</h2>
        <p>{JSON.stringify(myCar)}</p>
      
    </div>
  )
}

export default TypeAliases
