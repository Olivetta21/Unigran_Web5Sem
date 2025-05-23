import Produto from "./Produto"

export default function Prateleira({ produtos }) {
  return (
    <div className="prateleira">
      {produtos.map((produto, index) => (
        <Produto key={index} produto={produto} />
      ))}
    </div>
  )
}