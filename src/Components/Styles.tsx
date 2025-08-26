type StyleProps ={
    style: React.CSSProperties
}
const Styles =(props:StyleProps) =>{

        return (<div style ={props.style}>
                      <h1>React Typescript styles </h1>
            </div>
            )
}
export default Styles