import { useNavigate } from "react-router";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";

export default function BttnsHeader() {
    const navigate = useNavigate();

    const {setCarrinhoVisible} = useContext(DataContext);

    return (
        <div id="bttns">
            <button onClick={() => setCarrinhoVisible(true)}> Cart </button>
            <button onClick={() => navigate('/produtocrud')}> ProdCrud </button>
        </div>
    )
}