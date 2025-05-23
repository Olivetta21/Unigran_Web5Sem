import { useState } from "react";
import { produtos } from "../../data/produtos";
import BttnsHeader from "../Carrinho/bttnsheader";
import Carrinho from "../Carrinho/Carrinho";
import Prateleira from "../Compra/Prateleira";
import Header from "../head-foot/Header";

export default function Inicio() {
    const [cartVisible, setCartVisible] = useState(false);

    return (
        <div>
            <Header Bttns={<BttnsHeader setVisivel={setCartVisible}/>}/>
            <Prateleira produtos={produtos} />
            {cartVisible && <Carrinho setVisivel={setCartVisible}  />}
        </div>
    )
}

