import  React  from "react"
type sonProps={title:string,children?:React.ReactNode ,style?:React.CSSProperties }
const Son = ({title,children,style}:sonProps) => {
  return (
    <div style={style}>
             <h1>{title}</h1>
             {children}
    </div>
  )
}

export default Son
