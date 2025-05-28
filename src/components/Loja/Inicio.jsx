import { useState, useContext } from "react";
import BttnsHeader from "../Carrinho/bttnsheader";
import Carrinho from "../Carrinho/Carrinho";
import Prateleira from "../Compra/Prateleira";
import Header from "../head-foot/Header";
import { DataContext } from "../Context/DataContext";

export default function Inicio() {
    const { produtos, carrinhoVisible } = useContext(DataContext);

    return (
        <div>
            <Header Bttns={<BttnsHeader/>}/>
            <Prateleira produtos={produtos} />
            {carrinhoVisible && <Carrinho/>}
        </div>
    )
}

