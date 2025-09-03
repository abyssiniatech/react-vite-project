
type  parentprops ={title:string,children? : React.ReactNode,style? : React.CSSProperties,className:string,}
const Parent = ({title,children,style}:parentprops) => {
  return (
    <div style={style}>
        <h1>{title}</h1>
        {children}
    </div>
  )
}

export default Parent
