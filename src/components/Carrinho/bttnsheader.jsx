import { useNavigate } from "react-router";

export default function BttnsHeader({setVisivel}) {
    const navigate = useNavigate();

    return (
        <div id="bttns">
            <button onClick={() => setVisivel(true)}> Cart </button>
            <button onClick={() => navigate('/produtocrud')}> ProdCrud </button>
        </div>
    )
}