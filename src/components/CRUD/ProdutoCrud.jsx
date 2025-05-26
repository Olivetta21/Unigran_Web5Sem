import { Outlet, useNavigate } from "react-router";

export default function ProdutoCrud() {
    const navigate = useNavigate();

    return (
        <div>
            <p>Esta página será usada para gerenciar produtos.</p>
            <button onClick={() => navigate("/produtocrud/cadastrar")}>Cadastrar</button>
            <button onClick={() => navigate("/produtocrud/atualizar")}>atualizar</button>
            <button onClick={() => navigate("/produtocrud/visualizar")}>Visualizar</button>
            <button onClick={() => navigate("/produtocrud/deletar")}>Deletar</button>
            <Outlet />
        </div>
    );
}