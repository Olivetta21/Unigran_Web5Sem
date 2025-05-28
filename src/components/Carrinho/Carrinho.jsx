import { produtos } from "../../data/produtos";
import Produto from "./Produto";
import "./carrinho.css";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export default function Carrinho() {
    const { setCarrinhoVisible } = useContext(DataContext);

    return (
        <div id="carrinho">
            <div id="right">   
            <div id="r-header">
                <p> Seu carrinho tem <strong> {produtos.length} itens </strong> </p>
                <span><strong className="close" onClick={() => setCarrinhoVisible(false)}>&times;</strong></span>
            </div>
            <div id="r-carrinho">
                {produtos.map((item, index) => (
                    <Produto key={index} nome={item.nome} img={item.imagem} />
                ))}
            </div>
            <div id="r-bottom">
                <div>
                <p> Total: </p>
                <p> <strong> R$10.681,60 </strong> </p>
                </div>
                <div>
                <img alt="tag"/>
                <p className="button purple"> Adicionar cupom </p>
                </div>
                <button> Finalizar compra </button>
            </div>
            </div>
        </div>
    )
}