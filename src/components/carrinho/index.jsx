import React from "react";
import Item from "../produtos";
import Tag from "../../assets/Tag.png"
import { produtos } from "../produtos/produtos";

export default function Carrinho() {

    return (
        <div id="pageholder">
            <div id="left">
            Ivan Luiz <br/> 802.495
            </div>
            <div id="right">   
            <div id="r-header">
                <p> Seu carrinho tem <strong> {produtos.length} itens </strong> </p>
                <span><strong class="close">&times;</strong></span>
            </div>
            <div id="r-carrinho">
                {produtos.map((item, index) => (
                    <Item key={index} nome={item.nome} img={item.imagem} />
                ))}
            </div>
            <div id="r-bottom">
                <div>
                <p> Total: </p>
                <p> <strong> R$10.681,60 </strong> </p>
                </div>
                <div>
                <img src={Tag} alt="tag"/>
                <p class="button purple"> Adicionar cupom </p>
                </div>
                <button> Finalizar compra </button>
            </div>
            </div>
        </div>
    )
}