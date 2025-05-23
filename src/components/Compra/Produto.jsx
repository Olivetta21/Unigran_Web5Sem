export default function Produto({ produto }) {
  return (
    <div className="produto">
      <img src={produto.imagem} alt={produto.nome} />
      <h2>{produto.nome}</h2>
      <p><strong>R$ {produto.valor.toFixed(2).replace('.', ',')}</strong></p>
      <button>comprar</button>
    </div>
  )
}