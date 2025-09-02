type CardProps = { title: string; children?: React.ReactNode; style?: React.CSSProperties };
function Card({ title, children, style }: CardProps) {
  return (
    <div style={style}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Card;