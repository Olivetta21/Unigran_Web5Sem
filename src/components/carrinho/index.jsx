import React from "react";
import Item from "../produtos";

export default function Carrinho() {
    return (
        <div id="pageholder">
            <div id="left">
            Ivan Luiz <br/> 802.495
            </div>
            <div id="right">   
            <div id="r-header">
                <p> Seu carrinho tem <strong> 5 itens </strong> </p>
                <span><strong class="close">&times;</strong></span>
            </div>
            <div id="r-carrinho">
                <Item/>
            </div>
            <div id="r-bottom">
                <div>
                <p> Total: </p>
                <p> <strong> R$10.681,60 </strong> </p>
                </div>
                <div>
                <img src="./imagens/Tag.png" alt="tag"/>
                <p class="button purple"> Adicionar cupom </p>
                </div>
                <button> Finalizar compra </button>
            </div>
            </div>
        </div>
    )
}