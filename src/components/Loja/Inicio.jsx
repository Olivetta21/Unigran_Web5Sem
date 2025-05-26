import { useState, useContext } from "react";
import BttnsHeader from "../Carrinho/bttnsheader";
import Carrinho from "../Carrinho/Carrinho";
import Prateleira from "../Compra/Prateleira";
import Header from "../head-foot/Header";
import { DataContext } from "../Context/DataContext";

export default function Inicio() {
    const [cartVisible, setCartVisible] = useState(false);

    const { produtos } = useContext(DataContext);

    return (
        <div>
            <Header Bttns={<BttnsHeader setVisivel={setCartVisible}/>}/>
            <Prateleira produtos={produtos} />
            {cartVisible && <Carrinho setVisivel={setCartVisible}  />}
        </div>
    )
}

