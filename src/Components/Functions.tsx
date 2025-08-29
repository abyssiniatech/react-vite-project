type FunctionProps={
    a:number;
    b:number;
}
const Functions = (prop: FunctionProps) => {
const product=prop.a * prop.b
    return (
        <div>
            a: {prop.a}, b: {prop.b}, product: {product}
        </div>
    );
}

export default Functions
